package com.programming.study.toby.p161029.dispatch.p03.doubledispatch;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class DoubleDispatch4 {
	interface Post {
		void postOn(SNS sns);
	}
	static class Text implements Post {
		@Override
		public void postOn(SNS sns) {
			sns.post(this);
		}
	}

	static class Picture implements Post {
		@Override
		public void postOn(SNS sns) {
			sns.post(this);
		}
	}
	interface SNS {
		void post(Text post);
		void post(Picture post);
	}

	static class Facebook implements SNS {
		@Override
		public void post(Text post) { System.out.println("text - facebook"); }
		@Override
		public void post(Picture post) { System.out.println("picture - facebook"); }
	}
	static class Twitter implements SNS {
		@Override
		public void post(Text post) { System.out.println("text - facebook"); }
		@Override
		public void post(Picture post) { System.out.println("picture - facebook"); }
	}

	static class GooglePlus implements SNS {
		@Override
		public void post(Text post) { System.out.println("text - googleplus"); }
		@Override
		public void post(Picture post) { System.out.println("picture - googleplus"); }
	}

	public static void main(String[] args) {
		List<Post> posts = Arrays.asList(new Text(), new Picture());
		List<SNS> snses = Arrays.asList(new Facebook(), new Twitter(), new GooglePlus());

		// Double Dispatch 사용해서 이전의 문제점 해결
		posts.forEach(p -> snses.forEach( s -> p.postOn(s) ));

		// java는 Multi Dispatch를 지원하지 않아서 Single Dispatch를 여러개 써서 (ex: Double Dispatch) 구현
		// Static Dispatch는 컴파일 타임에 체크를 하고 런타임 영향을 미치지 않기 때문에 성능에 영향이 없지만
		// Dynamic Dispatch는 런타임에 어떤 타입인지 선택해야하기 때문에 성능에 영향을 끼침

		// A 타입에서 여러개의 타입을 받아서 사용해야하는 경우, A타입에 로직을 수정하는 것보다 받아올 타입에 로직을 추가하고 런타임에 A 타임에서 받아온 객체의 명확한 타입을 알 수 있기 때문에 동작
		// Post 타입을 가리키는 reciever parameter에 SNS 타입을 가리키는 reciever paramter - 이렇게 두번 reciever parameter를 타기 때문에 double dispatcher
		// GOF에서는 Vistor 패턴으로 생각하면 됨

		// 추천 자료들
		// Designing Reusable Classes - http://www.laputan.org/drc.html
		// a simple technique for handling multiple polymorphism - http://uosis.mif.vu.lt/~plukas/resources/MultiDispatch/ingalls.pdf
	}
}
