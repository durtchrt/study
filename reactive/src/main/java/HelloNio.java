import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;

public class HelloNio {
    public static void main(String[] args) throws IOException {
        Path path = Paths.get("/Users/james.boo/dev/test");
        FileTime lastModifiedTime = Files.getLastModifiedTime(path);
        long millsTimes = lastModifiedTime.toMillis();
        System.out.println(new Date(millsTimes));
        System.out.println(lastModifiedTime);
    }
}
