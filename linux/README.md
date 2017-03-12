
```shell

docker pull nachinius/c-dev

root@1a88797ebf83:~# gcc -o a.o a.c
root@1a88797ebf83:~# ./a.o
global: 1
local: 11
heap: 101
root@1a88797ebf83:~# vi a.c
root@1a88797ebf83:~# objdump -d -M intel -S a.o

a.o:     file format elf64-x86-64


Disassembly of section .init:

0000000000400418 <_init>:
  400418:	48 83 ec 08          	sub    rsp,0x8
  40041c:	48 8b 05 d5 0b 20 00 	mov    rax,QWORD PTR [rip+0x200bd5]        # 600ff8 <_DYNAMIC+0x1d0>
  400423:	48 85 c0             	test   rax,rax
  400426:	74 05                	je     40042d <_init+0x15>
  400428:	e8 43 00 00 00       	call   400470 <__gmon_start__@plt>
  40042d:	48 83 c4 08          	add    rsp,0x8
  400431:	c3                   	ret

Disassembly of section .plt:

0000000000400440 <printf@plt-0x10>:
  400440:	ff 35 c2 0b 20 00    	push   QWORD PTR [rip+0x200bc2]        # 601008 <_GLOBAL_OFFSET_TABLE_+0x8>
  400446:	ff 25 c4 0b 20 00    	jmp    QWORD PTR [rip+0x200bc4]        # 601010 <_GLOBAL_OFFSET_TABLE_+0x10>
  40044c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]

0000000000400450 <printf@plt>:
  400450:	ff 25 c2 0b 20 00    	jmp    QWORD PTR [rip+0x200bc2]        # 601018 <_GLOBAL_OFFSET_TABLE_+0x18>
  400456:	68 00 00 00 00       	push   0x0
  40045b:	e9 e0 ff ff ff       	jmp    400440 <_init+0x28>

0000000000400460 <__libc_start_main@plt>:
  400460:	ff 25 ba 0b 20 00    	jmp    QWORD PTR [rip+0x200bba]        # 601020 <_GLOBAL_OFFSET_TABLE_+0x20>
  400466:	68 01 00 00 00       	push   0x1
  40046b:	e9 d0 ff ff ff       	jmp    400440 <_init+0x28>

0000000000400470 <__gmon_start__@plt>:
  400470:	ff 25 b2 0b 20 00    	jmp    QWORD PTR [rip+0x200bb2]        # 601028 <_GLOBAL_OFFSET_TABLE_+0x28>
  400476:	68 02 00 00 00       	push   0x2
  40047b:	e9 c0 ff ff ff       	jmp    400440 <_init+0x28>

0000000000400480 <malloc@plt>:
  400480:	ff 25 aa 0b 20 00    	jmp    QWORD PTR [rip+0x200baa]        # 601030 <_GLOBAL_OFFSET_TABLE_+0x30>
  400486:	68 03 00 00 00       	push   0x3
  40048b:	e9 b0 ff ff ff       	jmp    400440 <_init+0x28>

Disassembly of section .text:

0000000000400490 <_start>:
  400490:	31 ed                	xor    ebp,ebp
  400492:	49 89 d1             	mov    r9,rdx
  400495:	5e                   	pop    rsi
  400496:	48 89 e2             	mov    rdx,rsp
  400499:	48 83 e4 f0          	and    rsp,0xfffffffffffffff0
  40049d:	50                   	push   rax
  40049e:	54                   	push   rsp
  40049f:	49 c7 c0 d0 06 40 00 	mov    r8,0x4006d0
  4004a6:	48 c7 c1 60 06 40 00 	mov    rcx,0x400660
  4004ad:	48 c7 c7 7d 05 40 00 	mov    rdi,0x40057d
  4004b4:	e8 a7 ff ff ff       	call   400460 <__libc_start_main@plt>
  4004b9:	f4                   	hlt
  4004ba:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]

00000000004004c0 <deregister_tm_clones>:
  4004c0:	b8 4f 10 60 00       	mov    eax,0x60104f
  4004c5:	55                   	push   rbp
  4004c6:	48 2d 48 10 60 00    	sub    rax,0x601048
  4004cc:	48 83 f8 0e          	cmp    rax,0xe
  4004d0:	48 89 e5             	mov    rbp,rsp
  4004d3:	77 02                	ja     4004d7 <deregister_tm_clones+0x17>
  4004d5:	5d                   	pop    rbp
  4004d6:	c3                   	ret
  4004d7:	b8 00 00 00 00       	mov    eax,0x0
  4004dc:	48 85 c0             	test   rax,rax
  4004df:	74 f4                	je     4004d5 <deregister_tm_clones+0x15>
  4004e1:	5d                   	pop    rbp
  4004e2:	bf 48 10 60 00       	mov    edi,0x601048
  4004e7:	ff e0                	jmp    rax
  4004e9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]

00000000004004f0 <register_tm_clones>:
  4004f0:	b8 48 10 60 00       	mov    eax,0x601048
  4004f5:	55                   	push   rbp
  4004f6:	48 2d 48 10 60 00    	sub    rax,0x601048
  4004fc:	48 c1 f8 03          	sar    rax,0x3
  400500:	48 89 e5             	mov    rbp,rsp
  400503:	48 89 c2             	mov    rdx,rax
  400506:	48 c1 ea 3f          	shr    rdx,0x3f
  40050a:	48 01 d0             	add    rax,rdx
  40050d:	48 d1 f8             	sar    rax,1
  400510:	75 02                	jne    400514 <register_tm_clones+0x24>
  400512:	5d                   	pop    rbp
  400513:	c3                   	ret
  400514:	ba 00 00 00 00       	mov    edx,0x0
  400519:	48 85 d2             	test   rdx,rdx
  40051c:	74 f4                	je     400512 <register_tm_clones+0x22>
  40051e:	5d                   	pop    rbp
  40051f:	48 89 c6             	mov    rsi,rax
  400522:	bf 48 10 60 00       	mov    edi,0x601048
  400527:	ff e2                	jmp    rdx
  400529:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]

0000000000400530 <__do_global_dtors_aux>:
  400530:	80 3d 11 0b 20 00 00 	cmp    BYTE PTR [rip+0x200b11],0x0        # 601048 <__TMC_END__>
  400537:	75 11                	jne    40054a <__do_global_dtors_aux+0x1a>
  400539:	55                   	push   rbp
  40053a:	48 89 e5             	mov    rbp,rsp
  40053d:	e8 7e ff ff ff       	call   4004c0 <deregister_tm_clones>
  400542:	5d                   	pop    rbp
  400543:	c6 05 fe 0a 20 00 01 	mov    BYTE PTR [rip+0x200afe],0x1        # 601048 <__TMC_END__>
  40054a:	f3 c3                	repz ret
  40054c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]

0000000000400550 <frame_dummy>:
  400550:	48 83 3d c8 08 20 00 	cmp    QWORD PTR [rip+0x2008c8],0x0        # 600e20 <__JCR_END__>
  400557:	00
  400558:	74 1e                	je     400578 <frame_dummy+0x28>
  40055a:	b8 00 00 00 00       	mov    eax,0x0
  40055f:	48 85 c0             	test   rax,rax
  400562:	74 14                	je     400578 <frame_dummy+0x28>
  400564:	55                   	push   rbp
  400565:	bf 20 0e 60 00       	mov    edi,0x600e20
  40056a:	48 89 e5             	mov    rbp,rsp
  40056d:	ff d0                	call   rax
  40056f:	5d                   	pop    rbp
  400570:	e9 7b ff ff ff       	jmp    4004f0 <register_tm_clones>
  400575:	0f 1f 00             	nop    DWORD PTR [rax]
  400578:	e9 73 ff ff ff       	jmp    4004f0 <register_tm_clones>

000000000040057d <main>:
  40057d:	55                   	push   rbp
  40057e:	48 89 e5             	mov    rbp,rsp
  400581:	48 83 ec 10          	sub    rsp,0x10
  400585:	c7 45 f4 0a 00 00 00 	mov    DWORD PTR [rbp-0xc],0xa
  40058c:	8b 05 ba 0a 20 00    	mov    eax,DWORD PTR [rip+0x200aba]        # 60104c <global>
  400592:	83 c0 01             	add    eax,0x1
  400595:	89 05 b1 0a 20 00    	mov    DWORD PTR [rip+0x200ab1],eax        # 60104c <global>
  40059b:	8b 05 ab 0a 20 00    	mov    eax,DWORD PTR [rip+0x200aab]        # 60104c <global>
  4005a1:	83 e8 01             	sub    eax,0x1
  4005a4:	89 05 a2 0a 20 00    	mov    DWORD PTR [rip+0x200aa2],eax        # 60104c <global>
  4005aa:	8b 05 9c 0a 20 00    	mov    eax,DWORD PTR [rip+0x200a9c]        # 60104c <global>
  4005b0:	83 c0 01             	add    eax,0x1
  4005b3:	89 05 93 0a 20 00    	mov    DWORD PTR [rip+0x200a93],eax        # 60104c <global>
  4005b9:	8b 05 8d 0a 20 00    	mov    eax,DWORD PTR [rip+0x200a8d]        # 60104c <global>
  4005bf:	89 c6                	mov    esi,eax
  4005c1:	bf e4 06 40 00       	mov    edi,0x4006e4
  4005c6:	b8 00 00 00 00       	mov    eax,0x0
  4005cb:	e8 80 fe ff ff       	call   400450 <printf@plt>
  4005d0:	83 45 f4 01          	add    DWORD PTR [rbp-0xc],0x1
  4005d4:	83 6d f4 01          	sub    DWORD PTR [rbp-0xc],0x1
  4005d8:	83 45 f4 01          	add    DWORD PTR [rbp-0xc],0x1
  4005dc:	8b 45 f4             	mov    eax,DWORD PTR [rbp-0xc]
  4005df:	89 c6                	mov    esi,eax
  4005e1:	bf f0 06 40 00       	mov    edi,0x4006f0
  4005e6:	b8 00 00 00 00       	mov    eax,0x0
  4005eb:	e8 60 fe ff ff       	call   400450 <printf@plt>
  4005f0:	bf 04 00 00 00       	mov    edi,0x4
  4005f5:	e8 86 fe ff ff       	call   400480 <malloc@plt>
  4005fa:	48 89 45 f8          	mov    QWORD PTR [rbp-0x8],rax
  4005fe:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  400602:	c7 00 64 00 00 00    	mov    DWORD PTR [rax],0x64
  400608:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  40060c:	8b 00                	mov    eax,DWORD PTR [rax]
  40060e:	8d 50 01             	lea    edx,[rax+0x1]
  400611:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  400615:	89 10                	mov    DWORD PTR [rax],edx
  400617:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  40061b:	8b 00                	mov    eax,DWORD PTR [rax]
  40061d:	8d 50 ff             	lea    edx,[rax-0x1]
  400620:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  400624:	89 10                	mov    DWORD PTR [rax],edx
  400626:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  40062a:	8b 00                	mov    eax,DWORD PTR [rax]
  40062c:	8d 50 01             	lea    edx,[rax+0x1]
  40062f:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  400633:	89 10                	mov    DWORD PTR [rax],edx
  400635:	48 8b 45 f8          	mov    rax,QWORD PTR [rbp-0x8]
  400639:	8b 00                	mov    eax,DWORD PTR [rax]
  40063b:	89 c6                	mov    esi,eax
  40063d:	bf fb 06 40 00       	mov    edi,0x4006fb
  400642:	b8 00 00 00 00       	mov    eax,0x0
  400647:	e8 04 fe ff ff       	call   400450 <printf@plt>
  40064c:	b8 00 00 00 00       	mov    eax,0x0
  400651:	c9                   	leave
  400652:	c3                   	ret
  400653:	66 2e 0f 1f 84 00 00 	nop    WORD PTR cs:[rax+rax*1+0x0]
  40065a:	00 00 00
  40065d:	0f 1f 00             	nop    DWORD PTR [rax]

0000000000400660 <__libc_csu_init>:
  400660:	41 57                	push   r15
  400662:	41 89 ff             	mov    r15d,edi
  400665:	41 56                	push   r14
  400667:	49 89 f6             	mov    r14,rsi
  40066a:	41 55                	push   r13
  40066c:	49 89 d5             	mov    r13,rdx
  40066f:	41 54                	push   r12
  400671:	4c 8d 25 98 07 20 00 	lea    r12,[rip+0x200798]        # 600e10 <__frame_dummy_init_array_entry>
  400678:	55                   	push   rbp
  400679:	48 8d 2d 98 07 20 00 	lea    rbp,[rip+0x200798]        # 600e18 <__init_array_end>
  400680:	53                   	push   rbx
  400681:	4c 29 e5             	sub    rbp,r12
  400684:	31 db                	xor    ebx,ebx
  400686:	48 c1 fd 03          	sar    rbp,0x3
  40068a:	48 83 ec 08          	sub    rsp,0x8
  40068e:	e8 85 fd ff ff       	call   400418 <_init>
  400693:	48 85 ed             	test   rbp,rbp
  400696:	74 1e                	je     4006b6 <__libc_csu_init+0x56>
  400698:	0f 1f 84 00 00 00 00 	nop    DWORD PTR [rax+rax*1+0x0]
  40069f:	00
  4006a0:	4c 89 ea             	mov    rdx,r13
  4006a3:	4c 89 f6             	mov    rsi,r14
  4006a6:	44 89 ff             	mov    edi,r15d
  4006a9:	41 ff 14 dc          	call   QWORD PTR [r12+rbx*8]
  4006ad:	48 83 c3 01          	add    rbx,0x1
  4006b1:	48 39 eb             	cmp    rbx,rbp
  4006b4:	75 ea                	jne    4006a0 <__libc_csu_init+0x40>
  4006b6:	48 83 c4 08          	add    rsp,0x8
  4006ba:	5b                   	pop    rbx
  4006bb:	5d                   	pop    rbp
  4006bc:	41 5c                	pop    r12
  4006be:	41 5d                	pop    r13
  4006c0:	41 5e                	pop    r14
  4006c2:	41 5f                	pop    r15
  4006c4:	c3                   	ret
  4006c5:	66 66 2e 0f 1f 84 00 	data32 nop WORD PTR cs:[rax+rax*1+0x0]
  4006cc:	00 00 00 00

00000000004006d0 <__libc_csu_fini>:
  4006d0:	f3 c3                	repz ret

Disassembly of section .fini:

00000000004006d4 <_fini>:
  4006d4:	48 83 ec 08          	sub    rsp,0x8
  4006d8:	48 83 c4 08          	add    rsp,0x8
  4006dc:	c3                   	ret

```
