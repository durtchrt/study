import com.sun.org.apache.xml.internal.res.*;

import java.io.*;
import java.math.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 6..
 */
public class Main {
	public static void main(String[] args) {
//		MyClass<Integer> a = new MyClass<>("");
//		System.out.println(a.x.getClass().getSimpleName());

//		List<? extends Serializable> serializables = Arrays.asList("1", 2);
		List<Integer> integerList = Arrays.asList(1,2);
//		printList(integerList);
	}

	public static void printList(List<Object> list) {
		for (Object elem : list)
			System.out.println(elem + " ");
		System.out.println();
	}
}

class MyClass<X> {
	X x;
	<T> MyClass(T t) {
		this.x = (X) t;
	}
}

