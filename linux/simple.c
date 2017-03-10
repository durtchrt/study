#include <stdio.h>
#include <stdlib.h>

int global;

int main(void)
{
  int local;
  int *dynamic;
  dynamic = malloc(1383);

  printf("Local = %p\n", &local);
  printf("Dynamic = %p\n", dynamic);
  printf("Global = %p\n", &global);
  printf("main = %p\n", main);

  return 0;
}
