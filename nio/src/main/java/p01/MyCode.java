package p01;

/* package whatever; // don't place package name! */

import java.io.*;
import java.util.*;
import java.util.stream.*;

class myCode
{
    public static void main (String[] args) throws java.lang.Exception
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        CacheMap cacheMap = new CacheMapImpl();

        while(!input.equals("exit")) {
            String[] inputs = input.split(" ");
            if(inputs[0].equals("add")) {
                cacheMap.add(Integer.valueOf(inputs[1]), Integer.valueOf(inputs[2]));
            }else if(inputs[0].equals("get")) {
                cacheMap.add(Integer.valueOf(inputs[1]));

            } else if(inputs[0].equals("remove")) {

            } else if(inputs[0].equals("remove")) {

            }

        }

    }

    interface CacheMap<K, V> {
        void evict();
        void add(K key, V value);
        V get(K key);
        V remove(K key);
    }

    static class CacheMapImpl implements CacheMap<Integer, Integer> {
        List<Integer> cacheList = new LinkedList<>();
        Map<Integer, Integer> cacheMap = new HashMap<>();


        @Override
        public void evict() {
            Integer removekey = cacheList.remove(0);
            cacheMap.remove(removekey);
        }

        @Override
        public void add(Integer key, Integer value) {
            setCacheList(key);
            cacheMap.put(key, value);
        }

        @Override
        public Integer get(Integer key) {
            setCacheList(key);
            return cacheMap.get(key);
        }

        @Override
        public Integer remove(Integer key) {
            removeCacheList(key);
            return cacheMap.remove(key);
        }

        private void removeCacheList(Integer key) {
            this.cacheList = cacheList.stream().filter( x -> !x.equals(key)).collect(Collectors.toList());
        }

        private void setCacheList(Integer key) {
            if(cacheMap.get(key) != null) {
                int keyIndex = -1;
                for(int i =0; i < cacheList.size(); i++) {
                    int v = cacheList.get(i);
                    if(v == key) {
                        keyIndex = i;
                        break;
                    }
                }
                if(keyIndex != -1) {
                    int lastVal = cacheList.remove(cacheList.size() - 1);
                    cacheList.set(keyIndex, lastVal);
                    cacheList.add(key);
                }
            }
        }
    }
}

