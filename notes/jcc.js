"use strict";
var code_1 = require('../x86/x64/code');
var code = code_1.Code.create();
var start = code.getStartLabel();
var end = code.lbl('end');
code.jmp(start);
code.jmp(end);
code.jecxz(start);
code.jrcxz(start);
code.ja(start);
code.jae(start);
code.jb(start);
code.jbe(start);
code.jc(start);
code.je(start);
code.jg(start);
code.jge(start);
code.jl(start);
code.jle(start);
code.jna(start);
code.jnae(start);
code.jnb(start);
code.jnbe(start);
code.jnc(start);
code.jne(start);
code.jng(start);
code.jnge(start);
code.jnl(start);
code.jnle(start);
code.jno(start);
code.jnp(start);
code.jns(start);
code.jnz(start);
code.jo(start);
code.jp(start);
code.jpe(start);
code.jpo(start);
code.js(start);
code.jz(start);
code.ja(end);
code.jae(end);
code.jb(end);
code.jbe(end);
code.jc(end);
code.je(end);
code.jg(end);
code.jge(end);
code.jl(end);
code.jle(end);
code.jna(end);
code.jnae(end);
code.jnb(end);
code.jnbe(end);
code.jnc(end);
code.jne(end);
code.jng(end);
code.jnge(end);
code.jnl(end);
code.jnle(end);
code.jno(end);
code.jnp(end);
code.jns(end);
code.jnz(end);
code.jo(end);
code.jp(end);
code.jpe(end);
code.jpo(end);
code.js(end);
code.jz(end);
code.resb(200);
code.ja(start);
code.jae(start);
code.jb(start);
code.jbe(start);
code.jc(start);
code.je(start);
code.jg(start);
code.jge(start);
code.jl(start);
code.jle(start);
code.jna(start);
code.jnae(start);
code.jnb(start);
code.jnbe(start);
code.jnc(start);
code.jne(start);
code.jng(start);
code.jnge(start);
code.jnl(start);
code.jnle(start);
code.jno(start);
code.jnp(start);
code.jns(start);
code.jnz(start);
code.jo(start);
code.jp(start);
code.jpe(start);
code.jpo(start);
code.js(start);
code.jz(start);
code.ja(end);
code.jae(end);
code.jb(end);
code.jbe(end);
code.jc(end);
code.je(end);
code.jg(end);
code.jge(end);
code.jl(end);
code.jle(end);
code.jna(end);
code.jnae(end);
code.jnb(end);
code.jnbe(end);
code.jnc(end);
code.jne(end);
code.jng(end);
code.jnge(end);
code.jnl(end);
code.jnle(end);
code.jno(end);
code.jnp(end);
code.jns(end);
code.jnz(end);
code.jo(end);
code.jp(end);
code.jpe(end);
code.jpo(end);
code.js(end);
code.jz(end);
code.jmp(start);
code.jmp(end);
code.insert(end);
console.log(code.toString() + '\n\n');
var bin = code.compile();
console.log(code.toString() + '\n\n');