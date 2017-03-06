#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int g = 2;

int main()
{
  pid_t pid;
  int l = 3;

  printf("------\n");
  printf("PID(%d): Parent g=%d, l=%d \n", getpid(), g, l);
  printf("hello~~~1\n");
  pid = fork();
  printf("hello~~~2\n");
  if(pid < 0) {
    perror("fork error");
    exit(1);
  } else if(pid == 0) {
    g++;
    l++;
  } else {
    printf("-->\n");
    // wait(100);
  }

  printf("-->PID(%d): g=%d, l=%d\n", getpid(), g, l);

  return 0;
}
