package com.programming.study.toby.p161029.dispatch.p03.doubledispatch;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class DoubleDispatch2 {
	interface Post { void postOn(SNS sns); }
	static class Text implements Post {
		@Override
		public void postOn(SNS sns) {
			System.out.println("text ->" + sns.getClass().getSimpleName());
		}
	}

	static class Picture implements Post {
		@Override
		public void postOn(SNS sns) {
			System.out.println("picture ->" + sns.getClass().getSimpleName());

		}
	}
	interface SNS {}

	static class Facebook implements SNS {}
	static class Twitter implements SNS {}

	public static void main(String[] args) {
		List<Post> posts = Arrays.asList(new Text(), new Picture());
		List<SNS> snses = Arrays.asList(new Facebook(), new Twitter());

		posts.forEach(p -> snses.forEach( s -> p.postOn(s) ));
	}


}
