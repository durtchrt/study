#### (개념설명) process, 스레드
- process : 실행중인 프로그램
  - 과거의 프로세스: OS의 개입없이 독립적으로 메모리를 차지하고 실행
  - 현대의 프로세스: OS의해 메모리 영역을 확보하고 스케쥴링됨
- thread : 실행의 단위 - 프로세스내에서 실행되는 흐름의 단위
  - 하나의 프로세스는 하나 이상의 thread를 가짐
  - process = thread + memory layout
  - thread state
  - context switch
- thread
  - concurrency
  - parallel


#### 실제 비동기 코드 개발 사례 - channel home <- 사례를 설명하면서 비동기 설명도 곁들임.
- api request 순차적
- api 갯수가 늘어남 - 비동기로 api 호출 필요성 대두. - 기능이 추가되다보니 하나의 페이지에서 7번 api 호출이 필요하게됨.
- future를 사용해서 비동기 사용.
- ThreadPool 왜사용하는지 소개, Executors 종류.
- 처음엔newCachedThreadpool 사용, 문제점.
- API간 의존성 -> CompletableFuture사용.
- Hystrix 사용 rxjava 처음 만남
  - 기존에 동작하던 thread로 복귀해야해서 편법으로 CompletableFuture.complete() 사용
  - rxjava의 observable만 return하고 프레임워크단에서 알아서 실행해줬으면 좋겠다 생각이 들었음. -> Mono, Flux

#### (NIO 이야기 살짝) 생각하는 성능 상향 포인트.
  -  Thread를 과도하게 사용함. 1개의 connection당 7개의 thread를 사용.
    - Client API - nonblocking을 도입하고 싶음.
    - jdk 1.4 nio, jdk 1.7 nio2의 channelsocket, selector를 사용하여 하나의 쓰레드만으로 여러 socket 통신 가능.
    - 좀더 추상화한 netty
    - spring에서는netty를 요놈들을 이용해서 구현가능 AsyncRestTemplate, Netty4ClientHttpRequestFactory
    - AsysnRestTempalte -> ListenableFuture 반환. (callback hell 얘기 잠깐)
    - deprecated
      - org.springframework.web.reactive.function.client.WebClient   ---
      - org.springframework.http.client.reactive.ReactorClientHttpConnector
          -> 내부적으로 reactor.ipc.netty.http.client.HttpClient 사용
             - reactive는 blocking이 안되야하기때문에 nonblocking io는 선택이 아니라 필수라고 느낌.
    /*자꾸 deprecated 된다......*/

#### 내가 reactive쪽에 관심을 갖게된 이유
  - Reactive manifesto -> reactive란 단어가 노출이 점점점점
   -> reactive system이라서 programming하고는 다르다고는하나...  https://www.oreilly.com/ideas/reactive-programming-vs-reactive-systems
  - reactivex - 언어마다 다 생기네? 왜?
java: RxJava JavaScript: RxJS C#: Rx.NET C#(Unity): UniRx Scala: RxScala Clojure: RxClojure C++: RxCpp Lua: RxLua Ruby: Rx.rb Python: RxPY Go: RxGo Groovy: RxGroovy JRuby: RxJRuby Kotlin: RxKotlin Swift: RxSwift PHP: RxPHP Elixir: reaxive Dart: RxDart
   - http://reactivex.io/intro.html 여기 내용도 좀 버무리기!!!
     - pull vs push ->(Consumer) value가 도착할때까지 기다리기 vs value가 도착하면 push 받기
     - high-order functions
        - iterable vs observable
     - 	Future - single level asyncronous - Stream을 다룰수 있음.
     - Future.get -> callback - nonblock

     ====> 이런 내용들은 single thread에서 동작하는 UI 이벤트들은 적절한데. request별로 새로 thread를 할당하는 servlet은...   servlet 3.1의 nonblocking api도 AsyncServlet을 사용해서....

   - reactive-streams
     - 수많은 구현체들.http://www.reactive-streams.org/announce-1.0.0
	Akka Streams (version 1.0-RC2)
	MongoDB (version 1.0.0)
	Ratpack (version 0.9.16)
	Reactive Rabbit (version 1.0.0)
	Reactor (version 2.0.1.RELEASE)
	RxJava (version 1.0.0)
	Slick (version 3.0.0)
	Vert.x 3.0 (version milestone-5a)
   - Observable deprecated
      - JDK 9 Flow

#### projectreactor에서 말하는 소개글 잠시 언급
http://projectreactor.io/docs/core/release/reference/docs/index.html#reactive.hotCold
3. Introduction to Reactive Programming
3.1. Blocking can be wasteful
3.2. Asynchronicity to the rescue?
3.3. From Imperative to Reactive Programming
3.4. Composability and readability
3.5. The assembly line analogy
3.6. Operators
3.7. Nothing happens until you subscribe()
3.8. Backpressure
3.9. Hot vs Cold

#### 결론
 - 위의 내용들을 종합적으로 봤을때
    1. /* future.get()을 피해서*/ nonblocking을 통해 thread를 절약해서 성능향상
    2. functional하게 코딩
    3. 가독성이 좋아짐. -> 유지보수성 향샹.
    4. backpressure로 인해 더 안정적인 처리(자신의 처리량 이상의 것들은 버림.)
    5. 다양한 구현체, 기존것 deprecate. spring5 전격도입 피할 수 없는 프로그래밍 패러다임이다.
    6. 난 관심은 있지만 잘 모르겠다. 다음 섹션인 토비님의 내용을 듣자!!!!
