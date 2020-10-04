/**
 * Um problema muito comum envolvendo objetos.
 * 
 * Se tentarmos acessar uma propriedade de um tipo
 * que não é objeto, vamos ter um erro e nossa aplicação
 * vai quebrar.
 * 
 * Por exemplo, se tentarmos acessar a propriedade bairro
 * de endereco e endereco não for objeto, teremos um erro.
 * 
 * Por isso no exemplo seguinte precisamos verificar cada
 * propriedade e assim utilizar o valor de bairro do final
 * da cadeia.
 * 
 * TODO: Refatorar para optional chaining
 * ! Esse exemplo não possui testes
 */
if (usuario && usuario.endereco && usuario.endereco.bairro) {
  console.log(usuario.endereco.bairro);
}