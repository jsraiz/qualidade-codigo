import test from 'ava';
import getSpeed from './005-exemplo';

test('Velocidade acima de 1864', (t) => {
  t.is(getSpeed(1900), 1864);
})

test('Velocidade entre 1746 e 1864', (t) => {
  t.is(getSpeed(1800), 1746);
})

test('Velocidade entre 1628 e 1746', (t) => {
  t.is(getSpeed(1710), 1628);
})

test('Velocidade entre 1510 e 1628', (t) => {
  t.is(getSpeed(1520), 1510);
})

test('Velocidade entre 1392 e 1510', (t) => {
  t.is(getSpeed(1420), 1392);
})

test('Velocidade entre 1274 e 1392', (t) => {
  t.is(getSpeed(1290), 1274);
})

test('Velocidade entre 1156 e 1274', (t) => {
  t.is(getSpeed(1200), 1156);
})

test('Velocidade entre 1038 e 1156', (t) => {
  t.is(getSpeed(1100), 1038);
})

test('Velocidade entre 920 e 1038', (t) => {
  t.is(getSpeed(1000), 920);
})

test('Velocidade for até 920', (t) => {
  t.is(getSpeed(920), 0);
})
