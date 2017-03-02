package p01;

import java.io.*;
import java.util.*;

class Main
{
    public static void main (String[] args) throws java.lang.Exception
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String nodeSizeInput = br.readLine();

        int nodeSize = Integer.valueOf(nodeSizeInput);

        boolean[][] graph = new boolean[nodeSize][nodeSize];
        for(int i =0; i< nodeSize; i++) {
            graph[i] = createNode(br.readLine(), nodeSize);
        }

        String cycleCountInput = br.readLine();
        int cycleCount = Integer.valueOf(cycleCountInput);
        String result = findCycle(graph, cycleCount);

        System.out.println(result);
    }

    private static boolean[] createNode(String nodeString, int nodeSize) {
        boolean[] result =  new boolean[nodeSize];
        for(int i =0; i < nodeSize; i++) {
            if(nodeString.charAt(i) =='1') {
                result[i] = true;
            } else {
                result[i] = false;
            }
        }
        return result;
    }

     private static String findCycle(boolean[][] graph, int cycleCount) {
        boolean isFind = false;
        //Complex O(n^2)
        //첫번째 노드에서부터 그래프가 시작하는 전제는 문제에 없어서 전체 노드를 순회하는 구조로 구현
        for(int i =0; i < graph.length; i++) {
            for(int j=0; j < graph[i].length; j++) {
                if(graph[i][j]) {
                    isFind = checkCycle(i, j, graph, cycleCount - 1);
                    if(isFind) {
                        break;
                    }
                }

            }
            if(isFind) {
                break;
            }
        }
        if(isFind) {
            return "1";
        }
        return "0";
    }


    private static boolean checkCycle(int startI, int j, boolean[][] graph,  int cycleCount) {

            boolean cycleResult = false;
            for(int k =0; k < graph[j].length; k++) {
                if(graph[j][k]) {
                    if(cycleCount == 1) {
                        if(startI == k && graph[j][k]) {
                            return true;
                        }
                        return false;
                    }
                     cycleResult = checkCycle(startI, k, graph, cycleCount - 1);
                     if(cycleResult) {
                        break;
                     }
                }
            }
            return cycleResult;
    }
}

