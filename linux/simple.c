#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/syscall.h>

int global;

void* thread_function(void* arg);

int main(void)
{
  int local;
  int *dynamic;
  dynamic = malloc(1383);

  printf("Local = %p\n", &local);       //stack
  printf("Dynamic = %p\n", dynamic);    //heap
  printf("Global = %p\n", &global);     //data
  printf("main = %p\n", main);          //text

  int pid = fork();
  printf("process pid: %d\n", pid);

  printf("\n\n");
  pthread_t p_thread;
  int create_result = pthread_create(&p_thread, NULL, thread_function, NULL);
  printf("=>TID(%d)\n", (int)p_thread);
  pthread_join(p_thread, NULL);

  /*
  int a = 111;
  long int b = 222;
  printf("sizeof(a): %d\n", sizeof(a));
  printf("sizeof(b): %d\n", sizeof(b));
  printf("int %%d: %d\n", a);
  printf("int %%ld: %ld\n", a);
  printf("long int %%d: %d\n", b);
  printf("long int %%ld: %ld\n", b);
  */

  return 0;
}

void* thread_function(void* arg){
  printf("PID(%d)\n", getpid());
  printf("=============================\n");
  uint64_t tid;
  pthread_threadid_np(NULL, &tid);
  printf("->TID(%ld)\n", tid);
  printf("-->TID(%d)\n", syscall(SYS_thread_selfid));
}

/*
  fork(), vfork(), clone(), pthread_create() -> sys_clone(), sys_vfork(), sys_fork() -> do_fork() -> kernel_thread()
*/
