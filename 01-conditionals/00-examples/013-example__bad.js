/**
 * Queremos atribuir a PORT um valor vindo de variável de ambiente,
 * caso não exista, vai assumir o valor padrão de 3000
 */
let PORT = 3000;

if (process.env.PORT) {
  PORT = process.env.PORT;
}
