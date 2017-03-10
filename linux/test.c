#include <stdio.h>
#include <unistd.h>

int main(void) {
    printf("start\n");
    sleep(5);
    printf("end\n");
    return 0;
}

// gcc -o test test.c
// test: Mach-O 64-bit executable x86_64
// ./test &
// ▶ ps
 //  PID TTY           TIME CMD
 // 1046 ttys001    0:00.02 /Applications/iTerm.app/Contents/MacOS/iTerm2 --server login -fp james.boo
 // 1048 ttys001    0:00.43 -zsh
 // 2212 ttys002    0:00.38 /bin/zsh --login
 // 3294 ttys002    0:00.00 ./test

 // [1]  + 3294 done       ./test


 // 32bit process 4GB (user: 3GB, kernel: 4GB)
 
