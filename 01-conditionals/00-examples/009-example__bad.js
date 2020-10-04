/**
 * 
 * Assim como no exemplo 008, aqui temos um caso comum
 * de condicional que pode ser substituído por objetos
 * 
 * TODO: Substituir condicionais por objeto
 * ? Esse script possui testes 
 */

function updateUser(state, payload) {
  return 'atualizando usuario';
}

function createUser(state, payload) {
  return 'criando usuario';
}

function selectUser(state, payload) {
  return 'selecionando usuario';
}

function deleteUser(state, payload) {
  return 'deletando usuario';
}

export default function reducer(action, state) {
  if (action.type === 'UPDATE_USER') {
    return updateUser(state, action.payload);
  } else if (action.type === 'CREATE_USER') {
    return createUser(state, action.payload);
  } else if (action.type === 'SELECT_USER') {
    return selectUser(state, action.payload);
  } else if (action.type === 'DELETE_USER') {
    return deleteUser(state, action.payload);
  }
}
