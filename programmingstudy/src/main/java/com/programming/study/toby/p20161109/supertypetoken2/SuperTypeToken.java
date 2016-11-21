package com.programming.study.toby.p20161109.supertypetoken2;

import com.fasterxml.jackson.core.type.*;
import org.springframework.core.*;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken {

	static class TypesafeMap {
		Map<Type, Object> map = new HashMap<>();

		<T> void put(TypeReference<T> tr, T value) {
			map.put(tr.type, value);
		}

		<T> T get(TypeReference<T> tr) {
			if (tr.type instanceof Class<?>)
				return ((Class<T>)tr.type).cast(map.get(tr.type));
			else
				return ((Class<T>)((ParameterizedType)tr.type).getRawType()).cast(map.get(tr.type));
		}
	}

	static class TypeReference<T> {
		Type type;

		public TypeReference() {
			Type stype = getClass().getGenericSuperclass();
			if (stype instanceof ParameterizedType) {
				this.type = ((ParameterizedType) stype).getActualTypeArguments()[0];
			} else throw new RuntimeException();
		}
	}

	public static void main(String[] args) throws NoSuchFieldException {
		TypesafeMap m = new TypesafeMap();
		TypeReference<Integer> trInt = new TypeReference<Integer>() { }; // = extends TypeReference<Integer>
		TypeReference<String> trString = new TypeReference<String>() { }; // = extends TypeReference<String>
		TypeReference<List<Integer>> trIntegerList = new TypeReference<List<Integer>>() { };
		TypeReference<List<String>> trStringList = new TypeReference<List<String>>() { };
		TypeReference<List<List<String>>> trStringNestedList = new TypeReference<List<List<String>>>() { };

		m.put(trInt, 1);
		m.put(trString, "String");
		m.put(trIntegerList, Arrays.asList(1,2,3));
		m.put(trStringList, Arrays.asList("a","b","c"));
		m.put(trStringNestedList, Arrays.asList(
			Arrays.asList("A"),
			Arrays.asList("B"),
			Arrays.asList("C")
		));

		System.out.println(m.get(trInt));
		System.out.println(m.get(trString));
		System.out.println(m.get(trIntegerList));
		System.out.println(m.get(trStringList));
		System.out.println(m.get(trStringNestedList));

		//more easy then reflection api.
		ResolvableType rt = ResolvableType.forInstance(trStringNestedList);
		System.out.println(rt.getSuperType().getGenerics()[0]);

		System.out.println(rt.getSuperType().getGenerics()[0]);
		System.out.println(rt.getSuperType().getGeneric().getNested(2).getType());

		System.out.println(ResolvableType.forInstance(new ArrayList<String>()).hasUnresolvableGenerics()); //type erase check

	}
}
