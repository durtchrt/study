package com.programming.study.toby.p161029.dispatch.p03.doubledispatch;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class DoubleDispatch1 {
	interface Post { void postOn(SNS sns); }
	static class Text implements Post {
		@Override
		public void postOn(SNS sns) {
			if(sns instanceof  Facebook){
				System.out.println("text -> facebook");
			}
			if (sns instanceof  Twitter) {
				System.out.println("text -> twitter");
			}
		}
	}

	static class Picture implements Post {
		@Override
		public void postOn(SNS sns) {
			if(sns instanceof  Facebook){
				System.out.println("picture -> facebook");
			}
			if (sns instanceof  Twitter) {
				System.out.println("picture -> twitter");
			}

		}
	}
	interface SNS {}

	static class Facebook implements SNS {}
	static class Twitter implements SNS {}
	static class GooglePlus implements SNS {} //새로운 SNS 구현체가 생기면 if문을 추가해줘야하는 문제가 있다.

	public static void main(String[] args) {
		List<Post> posts = Arrays.asList(new Text(), new Picture());
		List<SNS> snses = Arrays.asList(new Facebook(), new Twitter(), new GooglePlus());
		posts.forEach(p -> snses.forEach( s -> p.postOn(s) )); //GooglePlus는 노출 안됨.
	}


}
