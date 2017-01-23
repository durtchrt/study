package com.programming.study.toby.p20161120.p2;

import java.util.*;

public class WildcardCapture {

	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 3, 2);
		reverse(list);
		System.out.println(list);
	}

	/*
	private static <T> void reverse(List<T> list) {
		List<T> temp = new ArrayList<>(list);
		for(int i =0 ; i < temp.size(); i++) {
			list.set(i, temp.get(list.size() - i -1));
		}
	}
	*/
	//wildcard로 변경
	/*
	private static void reverse(List<?> list) {
		List<?> temp = new ArrayList<>(list);
		for(int i =0 ; i < temp.size(); i++) {
			list.set(i, temp.get(list.size() - i -1));
			//Error:(25, 45) java: incompatible types: java.lang.Object cannot be converted to capture#1 of ?
			//캡쳐가 필요한 상황이라면 아는 정보가 없는데 set을 하려는데 타입을 몰라서 나오는 에러
			// ->  강제로 capture하는 helper 메서드를 만들라고 가이드를함
		}
	}
	*/

	/*
	// -_-;;
	// api를 사용하는 클라이언트가 볼때 ? 대신 T를 사용하면 클라이언트가 오해할 여지가 있으므로 헬퍼메서드를 사용해서 캡쳐해줌
	private static  void reverse(List<?> list) {
		reverseHelper(list);
	}

	// 컴파일러가 캡쳐 가능함.
	private static <T> void reverseHelper(List<T> list) {
		List<T> temp = new ArrayList<>(list);
		for(int i =0 ; i < temp.size(); i++) {
			list.set(i, temp.get(list.size() - i -1));
		}
	}
	*/

	//helper method를 사용하지 않고 우회하는 방법
	static void reverse(List<?> list) {
		List temp = new ArrayList<>(list);
		List list2 = list;   // Raw타입 사용
		for(int i =0 ; i < temp.size(); i++) {
			list2.set(i, list2.get(list2.size() - i -1));
		}
	}


}
