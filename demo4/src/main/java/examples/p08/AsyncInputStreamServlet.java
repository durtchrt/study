package examples.p08;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import javax.servlet.AsyncContext;
import javax.servlet.ReadListener;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Stuart Douglas
 */

//@WebServlet(urlPatterns = {"/aa"}, asyncSupported=true)
@WebServlet(asyncSupported=true)
public class AsyncInputStreamServlet extends HttpServlet {


    @Override
//        protected void doPost(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
    protected void service(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {

        final AsyncContext context = req.startAsync();

        final ServletOutputStream outputStream = resp.getOutputStream();
        ServletInputStream inputStream = req.getInputStream();
        final MyListener listener = new MyListener(outputStream, inputStream, context);
        inputStream.setReadListener(listener);
        outputStream.setWriteListener(listener);

    }

    private class MyListener implements WriteListener, ReadListener {
        private final ServletOutputStream outputStream;
        private final ServletInputStream inputStream;
        private final ByteArrayOutputStream dataToWrite = new ByteArrayOutputStream();
        private final AsyncContext context;

        boolean done = false;

        int written = 0;

        public MyListener(final ServletOutputStream outputStream, final ServletInputStream inputStream, final AsyncContext context) {
            this.outputStream = outputStream;
            this.inputStream = inputStream;
            this.context = context;
        }

        @Override
        public void onWritePossible() throws IOException {
            if (outputStream.isReady()) {
                outputStream.write(dataToWrite.toByteArray());
                written += dataToWrite.toByteArray().length;
                dataToWrite.reset();
                if (done) {
                    context.complete();
                }
            }
        }

        @Override
        public void onDataAvailable() throws IOException {
            int read;
            while (inputStream.isReady()) {
                read = inputStream.read();
                if (read == 0) {
                    System.out.println("onDataAvailable> read 0x00");
                }
                if (read != -1) {
                    dataToWrite.write(read);
                } else {
                    onWritePossible();
                }
            }
        }

        @Override
        public synchronized void onAllDataRead() throws IOException {
            done = true;
            onWritePossible();
        }

        @Override
        public synchronized void onError(final Throwable t) {
            t.printStackTrace();
        }
    }
}
