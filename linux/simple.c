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

/*

https://github.com/torvalds/linux/blob/master/include/linux/sched.h
task_struct
{

  struct thread_info		thread_info;
  unsigned int			cpu;
  int				prio;

	pid_t				pid;
	pid_t				tgid;

  state

  #define TASK_RUNNING			0
#define TASK_INTERRUPTIBLE		1
#define TASK_UNINTERRUPTIBLE		2
#define __TASK_STOPPED			4
#define __TASK_TRACED			8
 // Used in tsk->exit_state:
#define EXIT_DEAD			16
#define EXIT_ZOMBIE			32
#define EXIT_TRACE			(EXIT_ZOMBIE | EXIT_DEAD)
// Used in tsk->state again:
#define TASK_DEAD			64
#define TASK_WAKEKILL			128
#define TASK_WAKING			256
#define TASK_PARKED			512
#define TASK_NOLOAD			1024
#define TASK_NEW			2048
#define TASK_STATE_MAX			4096

OS -> task(task_struct, thread_union(+thread_info))

union thread_union {
  struct thread_info thread_info;
  unsigned long stack[THREAD_SIZE/sizeof(long)];
};

struct thread_info {
          struct task_struct      *task;          // main task structure
          struct exec_domain      *exec_domain;   // execution domain
          __u32                   flags;          // low level flags
          __u32                   status;         // thread synchronous flags
          __u32                   cpu;            // current CPU
          int                     preempt_count;  // 0 => preemptable,
                                                    //  <0 => BUG
          mm_segment_t            addr_limit;
          struct restart_block    restart_block;
          void __user             *sysenter_return;
  #ifdef CONFIG_X86_32
          unsigned long           previous_esp;   // ESP of the previous stack in
                                                  //  case of nested (IRQ) stacks
          __u8                    supervisor_stack[0];
  #endif
          unsigned int            sig_on_uaccess_error:1;
          unsigned int            uaccess_err:1;  // uaccess failed
  };

http://lxr.free-electrons.com/source/arch/x86/include/asm/ptrace.h?v=3.3
struct pt_regs { long ebx; long ecx; long edx; long esi; long edi; long ebp; long eax; int  xds; int  xes; int  xfs; int  xgs; long orig_eax; long eip; int  xcs; long eflags; long esp; int  xss; };

thread_struct <- 컨텍스트스위칭 
http://lxr.free-electrons.com/source/include/asm-i386/processor.h?v=2.0.40#L128


context switch - I/O 속도저하!!




*/
