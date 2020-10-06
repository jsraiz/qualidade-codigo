/* 
  Taxas INSS
  Salário mínimo: R$ 1.045,00	    7,5%	- ISENTO
  De R$ 1.045,01 a R$ 2.089,60	  9%	  15,67
  De R$ 2.089,61 a R$ 3.134,40	  12%	  78,36
  De R$ 3.134,41 a R$ 6.101,06	  14%	  141,05
  Acima de 6.101,06  desconto fixo 713.10

  Faixas aliquota e Faixas deducao

  SALÁRIO - ALIQUOTA - PARCELA A DEDUZIR
  Até 1.903,98	- 0 - ISENTO
  De R$ 1.903,99 até R$ 2.826,65	7,5%	142,80
  De R$ 2.826,66 até R$ 3.751,05  15%	354,80
  De R$ 3.751,06 até R$ 4.664,68	22,5%	636,13
  Acima de R$ 4.664,68	27,5%	869,36

  Salario base = salario bruto - INSS - pensao alimenticia - (numero dependentes x 189,59)
  IRPF = (salario base * aliquota) - deducao
*/

/** 
 * ! Code smells identificados:
 * - //// Função longa 
 * - //// Nomes de variáveis/constantes ruins
 * - Magic number
 * - Condicionais complexas
*/
function calculaIRPF(salarioBase) {
  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    return (salarioBase * 0.075) - 142.80;
  } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    return (salarioBase * 0.15) - 354.8;
  } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    return (salarioBase * 0.225) - 636.13;
  } else if (salarioBase > 4664.68){
    return (salarioBase * 0.275) - 869.36;
  }
  return 0;
}

function calculaINSS(salarioBruto) {
  let descontoINSS = 0;

  if (salarioBruto <= 1045) {
    descontoINSS = salarioBruto * 0.075;
  } else if (salarioBruto > 1045 && salarioBruto <= 2089.60) {
    descontoINSS = (salarioBruto * 0.09) - 15.67;
  } else if (salarioBruto > 2089.60 && salarioBruto <= 3134.40) {
    descontoINSS = (salarioBruto * 0.12) - 78.36;
  } else if (salarioBruto > 3134.40 && salarioBruto <= 6101.06) {
    descontoINSS = (salarioBruto * 0.14) - 141.05;
  } else {
    descontoINSS = 713.10;
  }

  return descontoINSS;
}

function formataNumero(numero) {
  return parseFloat(numero.toFixed(2));
}

export default function calculaSalario(salarioBruto) {
  const descontoINSS = formataNumero(calculaINSS(salarioBruto));

  const salarioINSSDescontado = salarioBruto - descontoINSS;

  const descontoIRPF = formataNumero(calculaIRPF(salarioINSSDescontado));

  const salarioLiquido = formataNumero(salarioINSSDescontado - descontoIRPF);

  return {
    descontoINSS,
    descontoIRPF,
    liquido: salarioLiquido
  };
}

