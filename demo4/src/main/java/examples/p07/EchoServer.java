package examples.p07;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.Channel;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import lombok.extern.slf4j.*;

@Slf4j
public class EchoServer {

    private ServerSocketChannel server = ServerSocketChannel.open();
    private Selector selector = Selector.open();
    private SelectionKey selection;
    private Map<Channel, String> dataMap = new HashMap<Channel, String>();

    private EchoServer() throws IOException {
        log.info("Starting server");
        server.configureBlocking(false);
        server.socket().bind(new InetSocketAddress(4444));
        server.register(selector, SelectionKey.OP_ACCEPT);
    }

    private void start() throws IOException {
        log.info("Server started");
        while (true) {
            selector.select();
            Iterator<SelectionKey> keyIterator = selector.selectedKeys().iterator();
            while (keyIterator.hasNext()) {
                selection = keyIterator.next();
                keyIterator.remove();
                if (!selection.isValid()) {
                    invalid();
                } else if (selection.isAcceptable()) {
                    createClient();
                } else if (selection.isReadable()) {
                    read();
                } else if (selection.isWritable()) {
                    write();
                }
            }
        }
    }

    private void invalid() throws IOException {
        log.info("Invalid selection");
        selection.channel().close();
        selection.cancel();
    }

    private void createClient() throws IOException {
        SocketChannel client = server.accept();
        client.configureBlocking(false);
        client.register(selector, SelectionKey.OP_READ);
    }

    private void read() throws IOException {
        ByteBuffer buffer = ByteBuffer.allocate(1024);
        SocketChannel client = (SocketChannel) selection.channel();
        int readed = client.read(buffer);
        StringBuilder sb = new StringBuilder();
        if (readed == -1) {
            log.info("Connection closed by client");
            client.close();
            selection.cancel();
            return;
        } else {
            buffer.flip();
            byte[] bytes = new byte[buffer.remaining()];
            buffer.get(bytes);
            sb.append(new String(bytes, "UTF-8"));
            buffer.clear();
        }
        readed = client.read(buffer);
        while (readed != -1 && readed != 0) {
            buffer.flip();
            sb.append(new String(buffer.array(), "UTF-8"));
            buffer.clear();
            readed = client.read(buffer);
        }
        log.info("Incoming:");
        log.info(sb.toString());
        log.info("");
        dataMap.put(client, sb.toString());
        selection.interestOps(SelectionKey.OP_WRITE);
    }

    private void write() throws IOException {
        SocketChannel client = (SocketChannel) selection.channel();
        String data = dataMap.get(client);
        log.info("Outcomming:");
        log.info(data);
        log.info("");
        client.write(ByteBuffer.wrap(data.getBytes()));
        selection.interestOps(SelectionKey.OP_READ);
//        client.close();
    }


    public static void main(String[] args) throws IOException {
        new EchoServer().start();
    }
}
