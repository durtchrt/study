### webflux 코드 샘플
(pom.xml은 하단 참조)

```java
public class Server {
    public static void main(String[] args) throws IOException {
        new Server().run();
        System.out.println("Press ENTER to exit.");
        System.in.read();
    }

    private void run() {
        RequestPredicate requestPredicate = RequestPredicates.GET("/hello");
        HandlerFunction<ServerResponse> handlerFunction = request -> ServerResponse.ok().build();
        RouterFunction<ServerResponse> routerFunction = RouterFunctions.route(requestPredicate, handlerFunction);
        HttpWebHandlerAdapter httpWebHandlerAdapter = toHttpHandler(routerFunction);
        ReactorHttpHandlerAdapter reactorHttpHandlerAdapter = new ReactorHttpHandlerAdapter(httpWebHandlerAdapter);
        HttpServer httpServer = HttpServer.create("localhost", 8080);
        httpServer.newHandler(reactorHttpHandlerAdapter).block();
    }
}
```

[nio 참조 링크](https://www.slideshare.net/llj098/epoll-from-the-kernel-side)



### 자주 나오는 Type cheatsheet
- ServerRequest - Server가 생성해서 주입. 익명함수의 인자로 사용.
- ServerResponse - ServerResponse.BodyBuilder로 생성.
- RequestPredicate: ServerRequest -> boolean(RequestPredicates으로 생성.)
- HandlerFunction: ServerRequest -> Mono<T>
- BodyInserters.fromObject(): BodyInserter<T, ReactiveHttpOutputMessage>
- RouterFunction: ServerRequest -> Mono<HandlerFunction<T>>
- RouterFunctins.route(RequestPredict, HandlerFuction): RouterFunction<T extends ServerResponse> -> RouterFunctions.toHttpHandler:HttpWebHandlerAdapter -> 


### POST multipart/form-data 참조
참조할만한 테스트 코드:  org.springframework.web.reactive.function.BodyExtractorsTests

[예제 작성된 github](https://github.com/sdeleuze/webflux-multipart/blob/master/src/main/java/com/example/MultipartRoute.java) -> 예제 코드에서 Part는 tranferTo가 없는데 사용함. 기존 interface가 바뀐듯함. 지금 돌리면 에러 발생할 듯.

Part interface는 뒤의 2 interface가 상속:  FilePart,  FormFieldPart

* TODO: Post Body lenght limit 방법 확인할것 *

### ServletHttpHandlerAdapter
    // Servlet is based on blocking I/O, hence the usage of non-direct, heap-based buffers
    // (i.e. 'false' as constructor argument)

위의 주석을 보면 ServletHttpHandler를 쓰는 것들은 nio의 장점을 제대로 못쓰는 것으로 보임
  1. blocking I/O
  2. 데이터를 OS에서 가지고 있는 것을 직접 쓰는게 아니고 OS에 있는 데이터를  jvm heap으로 copy한 후 사용하므로 copy overhead가 발생

SerletHttpHandlerAdapter 소스에 위와 같은 주석이 있음.
(참고: ServletHttpHandlerAdapter를 상속받은 TomcatHttpHandlerAdapter도 있음 tomcat은 java.nio.ByteBuffer를 사용 음... ServletHttpHandler도 buffer를 사용해서... 흠... 일단 스킵...)


### ReqeustPredicates 코드를 보다가 Optional을 쓰는 부분이 맘에 들어서 가져옴.
```
public static RequestPredicate queryParam(String name, Predicate<String> predicate) {
        return (request) -> {
            Optional<String> s = request.queryParam(name);
            return s.filter(predicate).isPresent();
        };
    }
```


### 좀 더 살펴볼 api들
- [SererCodecConfigurer](https://docs.spring.io/spring/docs/5.0.0.RC1_to_5.0.0.RC2/Spring%20Framework%205.0.0.RC2/org/springframework/http/codec/ServerCodecConfigurer.html)
- [WebHandlerAdapter](https://docs.spring.io/spring/docs/5.0.0.M5_to_5.0.0.RC1/Spring%20Framework%205.0.0.RC1/org/springframework/web/server/adapter/HttpWebHandlerAdapter.html)
- [WebSessionManager](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/server/WebSession.html)
- [DispatcherHandler](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/reactive/DispatcherHandler.html)
- [WebHandler](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/server/WebHandler.html)
- [HttpWebHandlerAdapter](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/server/adapter/HttpWebHandlerAdapter.html)
-[ReactorHttpHandlerAdapter](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/server/reactive/ReactorHttpHandlerAdapter.html)

### 찾아볼 것들
- ServerHttpRequest: HttpRequest, ReactiveHttpInputMessage

- ServerRequest도 있고 ServerHttpResponse도 있음
	- ServerResponse
	- ServerHttpResponse: ReactiveHttpOutputMessage: HttpMessage

    ServerHttpResponse는 Server쪽 코드에서 사용하는 모양새. 그쪽 머리 아픈데...암튼...
(ReactiveHttpOutputMessage를 이해하려면 project-reactor를 더 봐야할 듯.)



### pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
		 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>study</groupId>
	<artifactId>webflux-sample</artifactId>
	<version>0.1-SNAPSHOT</version>

	<build>
		<plugins>
			<plugin>
				<groupId>org.apache.maven.plugins</groupId>
				<artifactId>maven-compiler-plugin</artifactId>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
				</configuration>
			</plugin>
		</plugins>
	</build>

	<dependencyManagement>
        <dependencies>
		<dependency>
			<groupId>io.projectreactor</groupId>
			<artifactId>reactor-bom</artifactId>
			<version>Bismuth-RELEASE</version>
            <type>pom</type>
            <scope>import</scope>
		</dependency>
        </dependencies>
	</dependencyManagement>
	<dependencies>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-webflux</artifactId>
			<version>5.0.0.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-context</artifactId>
			<version>5.0.0.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.reactivestreams</groupId>
			<artifactId>reactive-streams</artifactId>
		</dependency>
		<dependency>
			<groupId>io.projectreactor</groupId>
			<artifactId>reactor-core</artifactId>
		</dependency>
		<dependency>
			<groupId>io.projectreactor.ipc</groupId>
			<artifactId>reactor-netty</artifactId>
		</dependency>
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.9.0.pr2</version>
		</dependency>
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-core</artifactId>
			<version>2.8</version>
		</dependency>
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-jcl</artifactId>
			<version>2.8</version>
		</dependency>
		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.12</version>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-test</artifactId>
			<version>5.0.0.RELEASE</version>
			<scope>test</scope>
		</dependency>
	</dependencies>
</project>

```
## 아래의 순서대로 설명 예정
1. 왜 webflux인가!
1. source 코드를 읽기
  - why?
  - 느낀점(부족한 메뉴얼)
  - 필요한 배경지식 소개
1. server start
1. example - minimum router & handler & httpHandler
1. RequestPredict - 다양한 예제 작성
1. HandlerFunction<ServerResponse>
1. RouterFunction 설명 및 테스트 코드작성
1. HttpHandler, WebHandler 그리고 HttpWebHandlerAdapter
  - ReactorHttpHandlerAdapter는 HttpHandler만 원하는데 HttpWebHandlerAdapter를 넣는 이유(설명)
1. Filter, Exception....(그리고 또 뭘할까...?)
1. Integrate with spring by DispatcherHandler
	

## (spring-test 프로젝트) HttpServerTests 
- @Before - server start하는 로직이 있음
- DefaultServerResponseBuilder(ServerResponse.ok()가 리턴하는 구체클래스) 



## HttpHandler
- 	Mono<Void> handle(ServerHttpRequest request, ServerHttpResponse response);

#### HttpWebHandlerAdapter: WebHandlerDecorator, HttpHandler 
- handler, decorator 패턴 굿!
- handle 메서드 중요!! 
*httpHandler를 webHandler로바꾸는건이해는가지만 필터같은건 언제 적용하는거지?*
--> FilteringWebHandler.handle -> DefaultWebFilterChain
---> WebFilter
   - CorsWebFilter -> CorsWebFilterTests 이 테스트를참조해보면 filter 사용법을 알 수있다.

```
	@Override
	public Mono<Void> handle(ServerHttpRequest request, ServerHttpResponse response) {
		ServerWebExchange exchange = createExchange(request, response);
		return getDelegate().handle(exchange)
				.onErrorResume(ex -> {
					response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
					logHandleFailure(ex);
					return Mono.empty();
				})
				.then(Mono.defer(response::setComplete));
```
## WebHandler
-	Mono<Void> handle(ServerWebExchange exchange);
	

## Webhandler

## WebHttpHandlerBuilder.applicationContext(applicationContext) <-빈네임으로조회하는로직이있음

## RouterFunctions
- (중요)toHttpHandler함수는 WebHandler -> HttpHandler 둘 다나옴.
- (HttpHandler)toHttpHandler(routerFunction): HttpHandler <- builder pattern (메서드마다 끝에 this 리턴하는 부분 확인)
  ```java
  	public static HttpHandler toHttpHandler(RouterFunction<?> routerFunction, HandlerStrategies strategies) {
		Assert.notNull(routerFunction, "RouterFunction must not be null");
		Assert.notNull(strategies, "HandlerStrategies must not be null");

		WebHandler webHandler = toWebHandler(routerFunction, strategies);
		return WebHttpHandlerBuilder.webHandler(webHandler)
				.filters(filters -> filters.addAll(strategies.webFilters()))
				.exceptionHandlers(handlers -> handlers.addAll(strategies.exceptionHandlers()))
				.localeContextResolver(strategies.localeContextResolver())
				.build();
	}
	
	public static WebHandler toWebHandler(RouterFunction<?> routerFunction, HandlerStrategies strategies) {
		Assert.notNull(routerFunction, "RouterFunction must not be null");
		Assert.notNull(strategies, "HandlerStrategies must not be null");

		return exchange -> {
			ServerRequest request = new DefaultServerRequest(exchange, strategies.messageReaders());
			addAttributes(exchange, request);
			return routerFunction.route(request)
					.defaultIfEmpty(notFound())					
// 우리가 입력한 핸들러가 실행되는 라인
					.flatMap(handlerFunction -> wrapException(() -> handlerFunction.handle(request)))
					.flatMap(response -> wrapException(() -> response.writeTo(exchange,
							new HandlerStrategiesResponseContext(strategies))));
		};
	}
  ```
- HandlerStrategies의 구현 클래스 DefaultHandlerStrategiesBuilder
  
##  WebHttpHandlerBuilder
 - 리턴하는건 HttpHandler지만 실제로는 HttpWebHandlerAdapter 리턴.(http, web 구분해서사용함 주의)
 - webhandler에서사용하는것들: FilteringWebHandler, ExceptionHandlingWebHandler, sessionManager, codecConfigurer, localeContextResolver
  ```
  public HttpHandler build() {

		WebHandler decorated;

		decorated = new FilteringWebHandler(this.webHandler, this.filters);
		decorated = new ExceptionHandlingWebHandler(decorated,  this.exceptionHandlers);

		HttpWebHandlerAdapter adapted = new HttpWebHandlerAdapter(decorated);
		if (this.sessionManager != null) {
			adapted.setSessionManager(this.sessionManager);
		}
		if (this.codecConfigurer != null) {
			adapted.setCodecConfigurer(this.codecConfigurer);
		}
		if (this.localeContextResolver != null) {
			adapted.setLocaleContextResolver(this.localeContextResolver);
		}

		return adapted;
	}
  ```
  

#### DispatcherHandler: WebHandler, ApplicationContextAware
- org.springframework.web.reactive.HandlerMapping (org.springframework.web.servlet 아님)
 - 	Mono<Object> getHandler(ServerWebExchange exchange);
- org.springframework.web.reactive.HandlerAdapter
 -	boolean supports(Object handler);
 - 	Mono<HandlerResult> handle(ServerWebExchange exchange, Object handler);
- org.springframework.web.reactive.HandlerResultHandler
 - 	boolean supports(HandlerResult result);
 -	Mono<Void> handleResult(ServerWebExchange exchange, HandlerResult result);





