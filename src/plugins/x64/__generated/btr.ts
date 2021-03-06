import MnemonicX86 from '../../x86/MnemonicX86';
import MnemonicVariationsX86 from '../../x86/MnemonicVariationsX86';
import * as a from '../atoms';

const mnemonic_add_0 = new MnemonicX86;
mnemonic_add_0.mnemonic                = "btr";
mnemonic_add_0.operandSize             = 16;
mnemonic_add_0.opcode                  = 4019;
mnemonic_add_0.operandTemplates        = [[a.r, a.m], [a.r]];
mnemonic_add_0.opreg                   = -1;
mnemonic_add_0.operandSizeDefault      = 32;
mnemonic_add_0.lock                    = false;
mnemonic_add_0.regInOp                 = false;
mnemonic_add_0.opcodeDirectionBit      = false;
mnemonic_add_0.useModrm                = true;
mnemonic_add_0.rep                     = false;
mnemonic_add_0.repne                   = false;
mnemonic_add_0.prefixes                = null;
mnemonic_add_0.opEncoding              = "mr";
mnemonic_add_0.rex                     = null;
mnemonic_add_0.vex                     = null;
mnemonic_add_0.evex                    = null;
mnemonic_add_0.mode                    = 63;
mnemonic_add_0.extensions              = null;

const mnemonic_add_1 = new MnemonicX86;
mnemonic_add_1.mnemonic                = "btr";
mnemonic_add_1.operandSize             = 32;
mnemonic_add_1.opcode                  = 4019;
mnemonic_add_1.operandTemplates        = [[a.r, a.m], [a.r]];
mnemonic_add_1.opreg                   = -1;
mnemonic_add_1.operandSizeDefault      = 32;
mnemonic_add_1.lock                    = false;
mnemonic_add_1.regInOp                 = false;
mnemonic_add_1.opcodeDirectionBit      = false;
mnemonic_add_1.useModrm                = true;
mnemonic_add_1.rep                     = false;
mnemonic_add_1.repne                   = false;
mnemonic_add_1.prefixes                = null;
mnemonic_add_1.opEncoding              = "mr";
mnemonic_add_1.rex                     = null;
mnemonic_add_1.vex                     = null;
mnemonic_add_1.evex                    = null;
mnemonic_add_1.mode                    = 63;
mnemonic_add_1.extensions              = null;

const mnemonic_add_2 = new MnemonicX86;
mnemonic_add_2.mnemonic                = "btr";
mnemonic_add_2.operandSize             = 64;
mnemonic_add_2.opcode                  = 4019;
mnemonic_add_2.operandTemplates        = [[a.r, a.m], [a.r]];
mnemonic_add_2.opreg                   = -1;
mnemonic_add_2.operandSizeDefault      = 32;
mnemonic_add_2.lock                    = false;
mnemonic_add_2.regInOp                 = false;
mnemonic_add_2.opcodeDirectionBit      = false;
mnemonic_add_2.useModrm                = true;
mnemonic_add_2.rep                     = false;
mnemonic_add_2.repne                   = false;
mnemonic_add_2.prefixes                = null;
mnemonic_add_2.opEncoding              = "mr";
mnemonic_add_2.rex                     = null;
mnemonic_add_2.vex                     = null;
mnemonic_add_2.evex                    = null;
mnemonic_add_2.mode                    = 63;
mnemonic_add_2.extensions              = null;

const mnemonic_add_3 = new MnemonicX86;
mnemonic_add_3.mnemonic                = "btr";
mnemonic_add_3.operandSize             = 16;
mnemonic_add_3.opcode                  = 4026;
mnemonic_add_3.operandTemplates        = [[a.r, a.m], [a.imm8]];
mnemonic_add_3.opreg                   = 6;
mnemonic_add_3.operandSizeDefault      = 32;
mnemonic_add_3.lock                    = false;
mnemonic_add_3.regInOp                 = false;
mnemonic_add_3.opcodeDirectionBit      = false;
mnemonic_add_3.useModrm                = true;
mnemonic_add_3.rep                     = false;
mnemonic_add_3.repne                   = false;
mnemonic_add_3.prefixes                = null;
mnemonic_add_3.opEncoding              = "mr";
mnemonic_add_3.rex                     = null;
mnemonic_add_3.vex                     = null;
mnemonic_add_3.evex                    = null;
mnemonic_add_3.mode                    = 63;
mnemonic_add_3.extensions              = null;

const mnemonic_add_4 = new MnemonicX86;
mnemonic_add_4.mnemonic                = "btr";
mnemonic_add_4.operandSize             = 32;
mnemonic_add_4.opcode                  = 4026;
mnemonic_add_4.operandTemplates        = [[a.r, a.m], [a.imm8]];
mnemonic_add_4.opreg                   = 6;
mnemonic_add_4.operandSizeDefault      = 32;
mnemonic_add_4.lock                    = false;
mnemonic_add_4.regInOp                 = false;
mnemonic_add_4.opcodeDirectionBit      = false;
mnemonic_add_4.useModrm                = true;
mnemonic_add_4.rep                     = false;
mnemonic_add_4.repne                   = false;
mnemonic_add_4.prefixes                = null;
mnemonic_add_4.opEncoding              = "mr";
mnemonic_add_4.rex                     = null;
mnemonic_add_4.vex                     = null;
mnemonic_add_4.evex                    = null;
mnemonic_add_4.mode                    = 63;
mnemonic_add_4.extensions              = null;

const mnemonic_add_5 = new MnemonicX86;
mnemonic_add_5.mnemonic                = "btr";
mnemonic_add_5.operandSize             = 64;
mnemonic_add_5.opcode                  = 4026;
mnemonic_add_5.operandTemplates        = [[a.r, a.m], [a.imm8]];
mnemonic_add_5.opreg                   = 6;
mnemonic_add_5.operandSizeDefault      = 32;
mnemonic_add_5.lock                    = false;
mnemonic_add_5.regInOp                 = false;
mnemonic_add_5.opcodeDirectionBit      = false;
mnemonic_add_5.useModrm                = true;
mnemonic_add_5.rep                     = false;
mnemonic_add_5.repne                   = false;
mnemonic_add_5.prefixes                = null;
mnemonic_add_5.opEncoding              = "mr";
mnemonic_add_5.rex                     = null;
mnemonic_add_5.vex                     = null;
mnemonic_add_5.evex                    = null;
mnemonic_add_5.mode                    = 63;
mnemonic_add_5.extensions              = null;

const x86_mnemonic_variations_btr = new MnemonicVariationsX86([
    mnemonic_add_0,
    mnemonic_add_1,
    mnemonic_add_2,
    mnemonic_add_3,
    mnemonic_add_4,
    mnemonic_add_5,
]);
x86_mnemonic_variations_btr.defaultOperandSize = 32;

export default x86_mnemonic_variations_btr;
