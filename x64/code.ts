import * as code from '../x86/code';
import * as o from '../x86/operand';
import * as d from '../x86/def';
import {Instruction} from './instruction';
import * as t from './table';


export const table = new d.DefTable(t.table, t.defaults);
export type Operand = code.Operand;


export class Code extends code.Code {

    static create() {
        var code = new Code;
        code.attachMethods(table);
        return code;
    }

    protected ClassInstruction = Instruction;


    operandSize = o.SIZE.D;
    addressSize = o.SIZE.Q;

    // table: d.DefTable = table;

    // addq(dst: Operand, src: Operand) {
    //     return this.insTable('add', [dst, src], o.SIZE.Q);
    // }
    //
    // inc(dst: Operand): Instruction {
    //     return this.insTable('inc', [dst]);
    // }
    //
    // incq(dst: Operand): Instruction {
    //     return this.insTable('inc', [dst], o.SIZE.Q);
    // }
    //
    // decq(dst: Operand): Instruction {
    //     return this.insTable('dec', [dst], o.SIZE.Q);
    // }
    //
    // movq(dst: Operand, src: Operand): Instruction {
    //     return this.insTable('mov', [dst, src], o.SIZE.Q);
    // }
    //
    // push(dst: Operand) {
    //     return this.insTable('push', [dst]);
    // }
    //
    // pushq(dst: Operand) {
    //     return this.insTable('push', [dst], o.SIZE.Q);
    // }
    //
    // pushw(dst: Operand) {
    //     return this.insTable('push', [dst], o.SIZE.W);
    // }
    //
    // lea(dst: o.Register, src: o.Memory): Instruction {
    //     return this.insTable('lea', [dst, src]);
    // }
    //
    // int(num: number): Instruction {
    //     if(typeof num !== 'number')
    //         throw TypeError('INT argument must be of type number.');
    //
    //     return this.insTable('int', [new o.Immediate8(num, false)]);
    // }
    //
    // syscall(): Instruction {
    //     return this.insTable('syscall');
    // }
    //
    // sysenter(): Instruction {
    //     return this.insTable('sysenter');
    // }
    //
    // sysexit(): Instruction {
    //     return this.insTable('sysexit');
    // }
    //
    // ret(bytes?: number): Instruction {
    //     return this.insTable('ret', bytes ? [new o.Immediate16(bytes)] : [])
    // }
    //
    // retq(bytes?: number) {
    //     this.ret(bytes);
    // }

}

export interface Code {
    add(dst: Operand, src: Operand): Instruction;
    addq(dst: Operand, src: Operand): Instruction;
    mov(dst: Operand, src: Operand): Instruction;
    movq(dst: Operand, src: Operand): Instruction;
    movd(dst: Operand, src: Operand): Instruction;
    push(): Instruction;
    pushq(): Instruction;
    pushd(): Instruction;
    pushw(): Instruction;
    inc(dst: Operand): Instruction;
    incq(dst: Operand): Instruction;
    dec(dst: Operand): Instruction;
    decq(dst: Operand): Instruction;
    lea(dst: Operand, src: Operand): Instruction;

    syscall(): Instruction;
    sysenter(): Instruction;
    sysexit(): Instruction;
    int(value: number): Instruction;
}
