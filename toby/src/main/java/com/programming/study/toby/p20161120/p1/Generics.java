package com.programming.study.toby.p20161120.p1;

import java.util.*;

public class Generics {

	// ? = wildcard
	// ? 은 원소를 메소드 안에서 사용하지 않음
	// ? != Object
	// 제약 - 객체에 원소와 상관없는 메서드만 사용가능
	// ex)
	// 사용가능 - list.size(), ...
	// 사용불가 - list.add(obj), list.get(0)
	static  void method2(List<?> list) {
	}

	static boolean isEmpty(List<?> list) {
		return list.size() == 0;
	}

	//wildcard와 대비
	//generic type을 쓴다는 것은 메서드안에 원소에 관심이 있다는 의미
	static <T> void method1(List<T> list) {

	}


// generic을 사용하는 것은  옳지 않다 왜냐하면 내부구현에서 제네릭 타입을 내부에서 사용하겠다는 의미이기때문 api 사용의도를 올바르게 표현하지 못했다고 봄.
// java api 가이드
/*
	private static <T> long frequency(List<T> list, T elem) {
		return list.stream().filter(s -> s.equals(elem)).count();
	}
*/
//->  wildcard 로  변경
	//T elem => Object elem을 한 이유는 와일드카드는  타입파라메터를 정의하는 부분에만 사용할수 있음
	private static long frequency(List<?> list, Object elem) {
		return list.stream().filter(s -> s.equals(elem)).count();
	}

	/*
	private static <T extends Comparable<T>> T max(List<T> list) {
		return list.stream().reduce((a,b) -> a.compareTo(b) > 0  ? a : b ).get();
	}
	*/
	//-> 얘도 와일드카드로  변경
	//upper bound -> 메서드 내에서 사용이 된다고 보면 상위한정 사용(메서드 안에서 사용되는 것 input)
	//lower bound -> 메서드 밖에서 사용이 된다면 하위한정 사용 (메서드 밖에서 사용되는 것 output)
	private static <T extends Comparable<? super T>> T max(List<? extends T> list) {
		return list.stream().reduce((a,b) -> a.compareTo(b) > 0  ? a : b ).get();
	}

	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 3, 2);
		System.out.println(frequency(list, 3));
		System.out.println(max(list));
		try {
			System.out.println(max(Collections.emptyList()));
		} catch (Exception e) {
			//빈리스트에서 에러가 나오는 것은 의도가  명확하다고 봐서 예외발생이 맞다고 봄
		}
//		System.out.println(Collections.max(list, (a, b) -> a - b));
		//lambda 는 타입캐스팅이 됨
//		System.out.println(Collections.max(list, (Comparator<Object>) (a, b) -> a.toString().compareTo(b.toString())));
		// <Number>는 하위 경계에서 Integer의 상위 타입이므로 잘 됨
		System.out.println(Collections.<Number>max(list, (Comparator<Object>) (a, b) -> a.toString().compareTo(b.toString())));
	}

}
