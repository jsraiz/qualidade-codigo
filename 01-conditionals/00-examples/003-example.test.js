import test from 'ava';
import getStatus from './003-example__good';

test('Se onlineArr for todo false e connectedArr todo true', (t) => {
  const onlineArr = [false, false, false];
  const connectedArr = [true, true, true];
  t.is(getStatus(onlineArr, connectedArr), 'Offline')
})

test('Se onlineArr for todo false e connectedArr todo false', (t) => {
  const onlineArr = [false, false, false];
  const connectedArr = [false, false, false];
  t.is(getStatus(onlineArr, connectedArr), 'Offline')
})

test('Se onlineArr for todo false e connectedArr for mesclado', (t) => {
  const onlineArr = [false, false, false];
  const connectedArr = [false, true, true];
  t.is(getStatus(onlineArr, connectedArr), 'Offline')
})

test('Se onlineArr for todo true e connectedArr todo false', (t) => {
  const onlineArr = [true, true, true];
  const connectedArr = [false, false, false];
  t.is(getStatus(onlineArr, connectedArr), 'Disconnected')
})

test('Se onlineArr for todo true e connectedArr todo true', (t) => {
  const onlineArr = [true, true, true];
  const connectedArr = [true, true, true];
  t.is(getStatus(onlineArr, connectedArr), 'Connected')
})

test('Se onlineArr for todo true e connectedArr for mesclado', (t) => {
  const onlineArr = [true, true, true];
  const connectedArr = [true, false, true];
  t.is(getStatus(onlineArr, connectedArr), 'Partially disconnected')
})


test('Se onlineArr for mesclado e connectedArr todo false', (t) => {
  const onlineArr = [true, false, true];
  const connectedArr = [false, false, false];
  t.is(getStatus(onlineArr, connectedArr), 'Partially offline')
})

test('Se onlineArr for mesclado e connectedArr todo true', (t) => {
  const onlineArr = [true, false, true];
  const connectedArr = [true, true, true];
  t.is(getStatus(onlineArr, connectedArr), 'Partially offline')
})

test('Se onlineArr for mesclado e connectedArr for mesclado', (t) => {
  const onlineArr = [true, false, true];
  const connectedArr = [false, false, true];
  t.is(getStatus(onlineArr, connectedArr), 'Partially offline')
})