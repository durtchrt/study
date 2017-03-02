package p01;

import java.io.*;
import java.util.*;

public class Main2 {
private static void memcpy(byte[] v, int dest, int src, int size) {
        // dest - 메모리 복사할 대상의 배열 시직점
        // src  - 메모리 복사 원본의 시작 인덱스
        // size - 메모리 복사할 크기

        // 1. 파라메터의 값 유효성 검증
        if(size <= 0 || size > v.length) {
            return;
        }

        if(src + size > v.length) {
            return;
        }

        if(dest + size > v.length) {
            return;
        }

        // 2. 복사 대상 임시 배열에 복사
        byte[] tmpBytes = new byte[size];
        int srcIndex = src;

        //Complex O(N)
        for(int i = 0; i < size ; i++) {
            tmpBytes[i] = v[srcIndex];
            srcIndex++;
        }

        // 3. 임시 배열에 복사된 값을 대상 배열에 복사.
        //Complex O(N)
        int destIndex = dest;
        for(int i = src; i < (src + size) ; i++) {
            v[destIndex] = tmpBytes[i];
            destIndex++;
        }
    }

    public static void main (String[] args) throws Exception
    {
        Scanner scanner = new Scanner(System.in).useRadix(10);
//        int arrSize  = scanner.nextInt();
//        scanner.nextLine();
        int arrSize =  10;
//        10
//0 255 123 12 2 4 12 4 55 2
//5 0 3
        int[] input = new int[]{0, 255, 123, 12, 2, 4, 12, 4, 55, 2};

        byte[] bytes = new byte[arrSize];
        for(int i=0;i<arrSize;i++){
//            bytes[i] = Integer.valueOf(scanner.nextInt()).byteValue();
            bytes[i] = Integer.valueOf(input[i]).byteValue();
        }
//        scanner.nextLine();

//        int dest = scanner.nextInt();
//        int src = scanner.nextInt();
//        int size = scanner.nextInt();
//        scanner.close();
          int dest = 5;
        int src = 0;
        int size = 0;

        try {
            memcpy(bytes, dest, src, size);
        } catch (Exception e) {
            //ignore
        }
        printBytes(bytes, System.out);
    }

    private static void printBytes(byte[] bytes, PrintStream out) {
        for (byte item : bytes) {
            out.print(Byte.toUnsignedInt(item));
            out.print(' ');
        }
    }
}
