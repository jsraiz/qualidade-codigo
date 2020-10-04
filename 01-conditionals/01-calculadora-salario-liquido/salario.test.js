import test from 'ava';
import calculaSalario from './salario';

test('salario até 1045 desconto INSS 7.5% ', (t) => {
  t.is(calculaSalario(1045).descontoINSS, 78.38);
});

test('salario entre 1045 e 2089.60 desconto INSS 9%', (t) => {
  t.is(calculaSalario(1250).descontoINSS, 96.83);
});

test('salario entre 2089.60 e 3134.40 desconto INSS 12%', (t) => {
  t.is(calculaSalario(2700).descontoINSS, 245.64);
});

test('salario acima de 3134.40 desconto INSS 14%', (t) => {
  t.is(calculaSalario(4210).descontoINSS, 448.35);
});

test('salario base até 1903.99 sem desconto de IRPF', (t) => {
  t.is(calculaSalario(1500).descontoIRPF, 0);
});

test('salario base entre 1903.99 e 2826.65 desconto IRPF 7.5%', (t) => {
  t.is(calculaSalario(2300).descontoIRPF, 14.88);
});

test('salario base entre 2826.65 e 3751.05 desconto IRPF 15%', (t) => {
  t.is(calculaSalario(3230).descontoIRPF, 83.03);
});

test('salario base entre 3751.05 e 4664.68 desconto IRPF 22.5%', (t) => {
  t.is(calculaSalario(4430).descontoIRPF, 252.81);
});

test('salario base acima de 4664.68 desconto IRPF 22.5%', (t) => {
  t.is(calculaSalario(8100).descontoIRPF, 1162.04);
});


test('salario bruto abaixo de R$1045', (t) => {
  t.is(calculaSalario(970).liquido, 897.25);
});

test('salario bruto de 1500', (t) => {
  t.is(calculaSalario(1500).liquido, 1380.67);
});

test('salario bruto de R$2100', (t) => {
  t.is(calculaSalario(2100).liquido, 1924.68);
});

test('salario bruto de R$3255', (t) => {
  t.is(calculaSalario(3255).liquido, 2854.10);
});

test('salario bruto de R$3751.06', (t) => {
  t.is(calculaSalario(3751.06).liquido, 3216.72);
});

test('salario bruto de R$5500', (t) => {
  t.is(calculaSalario(5500).liquido, 4400.87);
});

test('salario bruto de R$8800', (t) => {
  t.is(calculaSalario(8800).liquido, 6732.36);
});

test('salario bruto de R$11500', (t) => {
  t.is(calculaSalario(11500).liquido, 8689.86);
});