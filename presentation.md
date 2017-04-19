#### (개념설명) process, 스레드
- process
  - 과거의 프로세스
  - 현대의 프로세스
- thread 
  - 하나의 프로세스는 하나 이상의 thread를 가짐
  - process = thread + memory layout
  - thread state
  - context switch
- thread
  - concurrency
  - parallel


#### 실제 비동기 코드 개발 사례
- 개발 사례
  - 비동기 코드가 필요한 상황 
  - Thread
  - Future
  - Executors
  - CompletableFuture
- 장애 대응
  - 과도한 트래픽
  - API 서버 장애 

#### 성능향상
  - nonblocking IO 
    - server
    - client

#### 결론
  - thread를 직접 사용하는 것은 쉽지 않다. circuit breaker까지 도입.
  - Nonblocking IO를 사용하면 tomcat thread 갯수를 줄일수 있어서 도움이 된다.
  - 그러나 여전히 service thread에서 thread per socket model로는 thread가 너무 많이 발생.
  - service thread에서api 호출을 nonblocking으로 호출을하려면 callback
  - DeferredResult를 사용하면 최소의 쓰레드 갯수로 client api 호출 코드 구현 가능
  - 그러나 코드를 보면 callback hell, 가독성 저하
  - Spring5의 Mono, Flux와 WebClient의 코드들을 보면서 내가 원하는 방향성을 제시하고 있음.
  - 토비님의 섹션을 보면서 함께 방향성을 느끼시죠.




