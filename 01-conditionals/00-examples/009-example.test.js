import test from 'ava';
import reducer from './009-exemplo';

test('action UPDATE_USER', (t) => {
  t.is(reducer({ type: 'UPDATE_USER' }, {}), 'atualizando usuario');
})

test('action CREATE_USER', (t) => {
  t.is(reducer({ type: 'CREATE_USER' }, {}), 'criando usuario');
})

test('action SELECT_USER', (t) => {
  t.is(reducer({ type: 'SELECT_USER' }, {}), 'selecionando usuario');
})

test('action DELETE_USER', (t) => {
  t.is(reducer({ type: 'DELETE_USER' }, {}), 'deletando usuario');
})