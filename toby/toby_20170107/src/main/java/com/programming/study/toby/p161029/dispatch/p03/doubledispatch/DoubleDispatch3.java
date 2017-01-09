package com.programming.study.toby.p161029.dispatch.p03.doubledispatch;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class DoubleDispatch3 {
	interface Post {
		void postOn(Facebook sns);
		void postOn(Twitter sns);
	}
	static class Text implements Post {

		@Override
		public void postOn(Facebook sns) {
			System.out.println("text -> facebook");
		}

		@Override
		public void postOn(Twitter sns) {
			System.out.println("text -> twitter");
		}
	}

	static class Picture implements Post {
		@Override
		public void postOn(Facebook sns) {
			System.out.println("picture -> facebook");
		}

		@Override
		public void postOn(Twitter sns) {
			System.out.println("picture -> twitter");
		}
	}
	interface SNS {}

	static class Facebook implements SNS {}
	static class Twitter implements SNS {}

	public static void main(String[] args) {
		List<Post> posts = Arrays.asList(new Text(), new Picture());
		List<SNS> snses = Arrays.asList(new Facebook(), new Twitter());

//		posts.forEach(p -> snses.forEach( s -> p.postOn(s) )); // s는 SNS 타입이기 때문에 type으로 dynamic dispatch을 못함.
//		posts.forEach(p -> snses.forEach((SNS s) -> p.postOn(s) ));
	}


}
