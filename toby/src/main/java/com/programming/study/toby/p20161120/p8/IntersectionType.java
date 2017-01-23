package com.programming.study.toby.p20161120.p8;

import java.util.function.*;

public class IntersectionType {
	interface DelegateTo<T> {
		T delegate();
	}

	interface Hello extends DelegateTo<String> {
		default void hello() {
			System.out.println("hello " + delegate());
		}
	}

	interface UpperCase extends DelegateTo<String> {
		default void upperCase() {
			System.out.println(delegate().toUpperCase());
		}
	}

	public static void main(String[] args) {
		run((DelegateTo<String> & Hello & UpperCase)() -> "Daniel Jung", o -> {
			o.hello();
			o.upperCase(); // Mixin, trait의 초보적인 버전으로 보면됨. 자바는 안되는 것이라 생각되던 것.
		});
	}

	private static <T extends DelegateTo<S>, S> void run(T t, Consumer<T> consumer) {
		consumer.accept(t);
	}

}
