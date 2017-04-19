#### (개념설명) process, 스레드
- 도입
  - reactive programming에 들어가기 앞서 필요한 지식에 대해 알아보자.
- 본론
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
- 마무리
  - 일반화된 이론 이야기를 바탕으로 java 개발에서는 어떻게 하는지 살펴보자.

#### 비동기 코드 개발 예
- 도입
  - 동기 방식의 문제점
- 비동기 개발에 사용한 API
  - Thread
    - wait, notify
  - Future
  - Executors
- 마무리
  - thread를 직접 다루는 것은 쉽지 않다.
  - Future는 single value만 다루기 때문에 복합적으로 처리하기 쉽지 않다.
  - 장애 대응을하면서 느낀점.
      - 과도한 트래픽
      - API 서버 장애

#### 성능향상
- 도입
  - thread per IO 모델을 벗어나자.  
- nonblocking IO
    - server
      - DeferredResult + CompletableFuture code example
    - client
      - AsysnRestTempalte + Netty4ClientHttpRequestFactory code example
- 결론
  - thread의 갯수가 많이 줄어 들었지만 callback 형태의 개발이 쉽지 않다.
  - 이 시점부터는 event driven programming이 되어 버렸다.

#### 결론
  - thread를 직접 사용하는 것은 쉽지 않다. circuit breaker까지 도입.
  - Nonblocking IO를 사용하면 thread 갯수를 줄일수 있어서 도움이 된다.
  - thread 갯수가 줄어드는 것은 context switching 비용이 줄어들고 GC 비용이 줄어든다.
  - Nonblocking Servlet으로 개발하려면 보통 Spring DeferredResult를 사용하는데 개발하는건 아직 뭔가 가렵다
  - CompletableFuture는 훌륭한 이벤트 기반 프로그래밍을 제공하지만 single value 관점이다.
  - stream 기반의 좀더 추상화된 모습이 Reactive로 나오고 있다.
  - backpressure는 기존 thread를 직접사용하는 형태의 프로그래밍 방법보다 더 나은 resilience를 제공.
  - Spring 5의 리액티브 코드들을 중심으로 기존과 확 달라지는 부분들을 보면 스프링도 이 방향이 맞다고 판단. 패러다임 자체를 바꿨다고 생각함.
  - 토비님의 섹션!!!
