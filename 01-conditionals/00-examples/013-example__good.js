/**
 * Queremos atribuir a PORT um valor vindo de variável de ambiente,
 * caso não exista, vai assumir o valor padrão de 3000
 */
// let PORT = 3000;

const process = {
  env: {
    // PORT: 5000
  }
}

// if (process.env.PORT) {
//   PORT = process.env.PORT;
// }

const PORT = process.env.PORT ?? 3000;

console.log(PORT);
