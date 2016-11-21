package com.programming.study.toby.p20161105.supertypetoken.p01.p01.typetoken;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class TypeToken5 {

	static class TypesafeMap {
		Map<String, Object> map =  new HashMap<>();
		void run() {
			map.put("a", "b");
			map.put("b", 1);
			//런타임에 오류가 날수있는 코드이므로 위험. -> refactoring 대상
			String a = (String)map.get("a");
			Integer b = (Integer)map.get("a");

		}
	}


	public static void main(String[] args) throws InstantiationException, IllegalAccessException {

	}
}
