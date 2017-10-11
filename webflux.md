### webflux 코드 샘플

```
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

### 자주 나오는 Type cheatsheet
- ServerRequest - Server가 생성해서 주입. 익명함수의 인자로 사용.
- ServerResponse - ServerResponse.BodyBuilder로 생성.
- RequestPredicate: ServerRequest -> boolean(RequestPredicates으로 생성.)
- HandlerFunction: ServerRequest -> Mono<T>
- RouterFunction: ServerRequest -> Mono<HandlerFunction<T>>
- RouterFunctins.route(RequestPredict, HandlerFuction):RouterFunction<T extends ServerResponse> -> RouterFunctions.toHttpHandler:HttpWebHandlerAdapter -> 


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





