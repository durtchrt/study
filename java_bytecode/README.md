
```shell
mvn compile exec:java
```


```shell
// javap -l -c ByteCodeExample
▶ javap -all ByteCodeExample

Compiled from "ByteCodeExample.java"
class ByteCodeExample {
  ByteCodeExample();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return
    LineNumberTable:
      line 2: 0

  public static void main(java.lang.String[]);
    Code:
       0: iconst_0
       1: istore_1
       2: iconst_0
       3: istore_2
       4: iinc          2, 1
       7: iinc          2, -1
      10: iinc          2, 1
      13: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
      16: new           #3                  // class java/lang/StringBuilder
      19: dup
      20: invokespecial #4                  // Method java/lang/StringBuilder."<init>":()V
      23: ldc           #5                  // String local:
      25: invokevirtual #6                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
      28: iload_2
      29: invokevirtual #7                  // Method java/lang/StringBuilder.append:(I)Ljava/lang/StringBuilder;
      32: invokevirtual #8                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
      35: invokevirtual #9                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      38: return
    LineNumberTable:
      line 4: 0
      line 5: 2
      line 7: 4
      line 8: 7
      line 9: 10
      line 10: 13
      line 11: 38
}
```
