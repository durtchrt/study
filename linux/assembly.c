#include <stdio.h>
#include <stdlib.h>

int global = 0;
int main() {
  int local = 10;

  global++;
  global--;
  global++;
  printf("global: %d\n", global);


  local++;
  local--;
  local++;
  printf("local: %d\n", local);

  int* heap = (int*)malloc(sizeof(int));
  *heap = 100;
  (*heap)++;
  (*heap)--;
  (*heap)++;
  // *heap = *heap + 1;
  printf("heap: %d\n", *heap);

  return 0;
}
