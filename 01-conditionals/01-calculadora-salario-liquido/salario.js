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
 * - //// Magic number
 * - Condicionais complexas
*/

const taxasINSS = {
  faixa1: {
    salarioDe: 0,
    salarioAte: 1045.00,
    aliquota: 0.075,
    deduzir: 0,
    descontoFixo: null
  },
  faixa2: {
    salarioDe: 1045.00,
    salarioAte: 2089.60,
    aliquota: 0.09,
    deduzir: 15.67,
    descontoFixo: null
  },
  faixa3: {
    salarioDe: 2089.60,
    salarioAte: 3134.40,
    aliquota: 0.12,
    deduzir: 78.36,
    descontoFixo: null
  },
  faixa4: {
    salarioDe: 3134.40,
    salarioAte: 6101.06,
    aliquota: 0.14,
    deduzir: 141.05,
    descontoFixo: null
  },
  faixa5: {
    salarioDe: 6101.06,
    descontoFixo: 713.10
  }
}; 

const taxasIRPF = {
  faixa1: {
    salarioDe: 0,
    salarioAte: 1903.98,
    descontoFixo: 0,
  },
  faixa2: {
    salarioDe: 1903.98,
    salarioAte: 2826.65,
    aliquota: 0.075,
    deduzir: 142.80,
    descontoFixo: null
  },
  faixa3: {
    salarioDe: 2826.65,
    salarioAte: 3751.05,
    aliquota: 0.15,
    deduzir: 354.8,
    descontoFixo: null
  },
  faixa4: {
    salarioDe: 3751.05,
    salarioAte: 4664.68,
    aliquota: 0.225,
    deduzir: 636.13,
    descontoFixo: null
  },
  faixa5: {
    salarioDe: 4664.68,
    aliquota: 0.275,
    deduzir: 869.36,
    descontoFixo: null
  },
};

function calculaIRPF(salarioBase) {
  if (salarioBase <= taxasIRPF.faixa1.salarioAte) {
    return taxasIRPF.faixa1.descontoFixo;
  } else if (salarioBase >= taxasIRPF.faixa1.salarioAte && salarioBase <= taxasIRPF.faixa2.salarioAte) {
    return (salarioBase * taxasIRPF.faixa2.aliquota) - taxasIRPF.faixa2.deduzir;
  } else if (salarioBase > taxasIRPF.faixa2.salarioAte && salarioBase <= taxasIRPF.faixa3.salarioAte) {
    return (salarioBase * taxasIRPF.faixa3.aliquota) - taxasIRPF.faixa3.deduzir;
  } else if (salarioBase > taxasIRPF.faixa3.salarioAte && salarioBase <= taxasIRPF.faixa4.salarioAte) {
    return (salarioBase * taxasIRPF.faixa4.aliquota) - taxasIRPF.faixa4.deduzir;
  } else if (salarioBase > taxasIRPF.faixa4.salarioAte){
    return (salarioBase * taxasIRPF.faixa5.aliquota) - taxasIRPF.faixa5.deduzir;
  }
  return taxasIRPF.faixa1.descontoFixo;
}

function calculaINSS(salarioBruto) {
  let descontoINSS = 0;

  if (salarioBruto <= taxasINSS.faixa1.salarioAte) {
    descontoINSS = salarioBruto * taxasINSS.faixa1.aliquota;
  } else if (salarioBruto > taxasINSS.faixa1.salarioAte && salarioBruto <= taxasINSS.faixa2.salarioAte) {
    descontoINSS = (salarioBruto * taxasINSS.faixa2.aliquota) - taxasINSS.faixa2.deduzir;
  } else if (salarioBruto > taxasINSS.faixa2.salarioAte && salarioBruto <= taxasINSS.faixa3.salarioAte) {
    descontoINSS = (salarioBruto * taxasINSS.faixa3.aliquota) - taxasINSS.faixa3.deduzir;
  } else if (salarioBruto > taxasINSS.faixa3.salarioAte && salarioBruto <= taxasINSS.faixa4.salarioAte) {
    descontoINSS = (salarioBruto * taxasINSS.faixa4.aliquota) - taxasINSS.faixa4.deduzir;
  } else {
    descontoINSS = taxasINSS.faixa5.descontoFixo;
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

