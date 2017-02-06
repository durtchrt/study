package study.oracle_tutorial;

import java.io.*;
import java.net.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.charset.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.time.*;
import java.util.*;

import static java.nio.file.StandardOpenOption.READ;
import static java.nio.file.StandardOpenOption.WRITE;

public class PathExample {

    public static void main(String[] args) throws IOException {
        final String absolutePath = "/Users/james.boo/dev/github.com/study/nio/src/main/java/study/oracle_tutorial/PathExample.java";
        Path p1 = Paths.get(absolutePath);
        Path p2 = Paths.get(URI.create("file:///Users/james.boo/dev/github.com/study/nio/src/main/java/study/oracle_tutorial/PathExample.java"));

        System.out.println(p1);
        System.out.println(p2);

        System.out.println(FileSystems.getDefault());
        System.out.println(FileSystems.getDefault().getPath("/tmp"));
        Path p3 = Paths.get(System.getProperty("user.home"), "logs", "foo.log");
        System.out.println(p3);
        System.out.println(p3.isAbsolute());

        Path p4 = Paths.get("../../home");
        Path p5 = p4.toAbsolutePath();
        System.out.println(p5);

//        Path p6 = p4.toRealPath(LinkOption.NOFOLLOW_LINKS);
//        System.out.println(p6);

        System.out.format("toString: %s%n", p1.toString());
        System.out.format("getFileName: %s%n", p1.getFileName());
        System.out.format("getName(0): %s%n", p1.getName(0));
        System.out.format("getNameCount: %d%n", p1.getNameCount());
        System.out.format("subpath(0,2): %s%n", p1.subpath(0,2));
        System.out.format("getParent: %s%n", p1.getParent());
        System.out.format("getRoot: %s%n", p1.getRoot());
        System.out.format("toUri: %s%n", p1.toUri());

        Path p6 = Paths.get("./PathExample.java");
        System.out.println("toAbsolutePath : " + p6.toAbsolutePath());
        Path p7 = Paths.get(absolutePath);
        System.out.println("toRealPath : " + p7.toRealPath());

        Path p8 = Paths.get("/Users/james.boo/dev/github.com/study/nio/src/main/java/study/oracle_tutorial/").resolve("PathExample.java");
        System.out.println(p8.toRealPath());

        Charset charset = Charset.forName("UTF-8");
        String message = "HelloWorld";

        Path p9 = Paths.get("./test.txt");
        System.out.println("p9.toAbsolutePath() : " + p9.toAbsolutePath());
        try (BufferedWriter writer = Files.newBufferedWriter(p9, charset)) {
            writer.write(message, 0, message.length());
        } catch (IOException e) {
            System.err.format("IOException:  %s%n", e);
        }

        boolean deleteIfExists = Files.deleteIfExists(p9);
        System.out.println("deleteIfExists : " + deleteIfExists);

        Path p10 = Paths.get("/Users/james.boo/dev/github.com/study/nio/src/main/java/study/oracle_tutorial/permissionexample");

        boolean executable = Files.isExecutable(p10);
        System.out.println("p10 is not executable. false == " + executable);

        boolean sameFile = Files.isSameFile(p1, p10);
        System.out.println("p1 != p10. false ==  " + sameFile);

        try {
            Files.delete(p1.getParent());
        } catch(java.nio.file.DirectoryNotEmptyException e) {
            System.out.println(e);
        }

        Files.copy(p10, p10.getParent().resolve("copyed_file"), StandardCopyOption.REPLACE_EXISTING);

        boolean symboliclink = Files.isSymbolicLink(p1.getParent().resolve("symboliclink"));
        System.out.println("Is symbolic link? : " + symboliclink);

        System.out.println("p1's byte size is " + Files.size(p1));

        System.out.println(LocalDateTime.ofInstant(Files.getLastModifiedTime(p1).toInstant(), ZoneId.systemDefault()));

        System.out.println(Files.getAttribute(p1, "lastAccessTime"));
        System.out.println(Files.getOwner(p1));

        FileStore fileStore = Files.getFileStore(Paths.get("/"));
        System.out.println(fileStore);

        System.out.println(fileStore.getTotalSpace() / (1024 * 1024 * 1024));
        System.out.println(fileStore.getUsableSpace() / (1024 * 1024 * 1024));

        String s = "I was here!\n";
        byte data[] = s.getBytes();
        ByteBuffer out = ByteBuffer.wrap(data);
        ByteBuffer copy = ByteBuffer.allocate(12);

        try( FileChannel fc = (FileChannel.open(p1.getParent().resolve("buffer"), READ, WRITE)) ) {
            int nread;
            do {
                nread = fc.read(copy);
                System.out.println("---");
            } while (nread != -1 && copy.hasRemaining());

            fc.position(0);
            while(out.hasRemaining()) {
                fc.write(out);
            }

            out.rewind();

            long length = fc.size();
            fc.position(length - 1);
            copy.flip();
//
            while(copy.hasRemaining()) fc.write(copy);
            while(out.hasRemaining()) fc.write(out);
        }


        Path p11 = Paths.get("/Users/james.boo/dev/github.com/study/nio");
        p11.iterator().forEachRemaining(System.out::println);
        Arrays.asList(p11.toFile().listFiles()).forEach(System.out::println);

        System.out.println("----------");

        try(DirectoryStream<Path> stream = Files.newDirectoryStream(p11)) {
            stream.forEach(System.out::println);
        }
    }

}
