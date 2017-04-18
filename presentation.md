#### process, 스레드
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
- multi process vs multi thread
  - process 단점 
    - context switch 상황에 cache miss -> IO 비용 발생
    - 가상메모리(페이징)로 인해 process간 직접 접근 불가 - overhead 발생
  - thread 단점
    - 




#### nonblocking
- thread-per-client 모델을 극복하기위한 
- os별로 지원: epoll, iocp
- java nio - epoll만
- 

#### reactive

