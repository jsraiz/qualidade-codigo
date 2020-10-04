import test from 'ava';
import getDiscount from './004-exemplo';

test('Valor menor que 10', (t) => {
  t.is(getDiscount(5), 500);
})

test('Valor entre 10 e 25', (t) => {
  t.is(getDiscount(22), 350);
})

test('Valor entre 25 e 100', (t) => {
  t.is(getDiscount(53), 250);
})

test('Valor maior que 100', (t) => {
  t.is(getDiscount(120), 200);
})