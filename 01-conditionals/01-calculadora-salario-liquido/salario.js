/* 
  Taxas INSS
  Salário mínimo: R$ 1.045,00	    7,5%	- ISENTO
  De R$ 1.045,01 a R$ 2.089,60	  9%	  15,67
  De R$ 2.089,61 a R$ 3.134,40	  12%	  78,36
  De R$ 3.134,41 a R$ 6.101,06	  14%	  141,05
  Acima de 6.101,06 desconto fixo de 713.10

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

function calculaIRPF(slb, inss) {
  const slbs = slb - inss;
  if (slbs >= 1903.99 && slbs <= 2826.65) {
    return (slbs * 0.075) - 142.80;
  } else if (slbs > 2826.65 && slbs <= 3751.05) {
    return (slbs * 0.15) - 354.8;
  } else if (slbs > 3751.05 && slbs <= 4664.68) {
    return (slbs * 0.225) - 636.13;
  } else if (slbs > 4664.68){
    return (slbs * 0.275) - 869.36;
  }
  return 0;
}

export default function calculaSalario(slb) {
  // Descontando taxa INSS
  let desconto = 0;

  if (slb <= 1045) {
    desconto = slb * 0.075;
  } else if (slb > 1045 && slb <= 2089.60) {
    desconto = (slb * 0.09) - 15.67;
  } else if (slb > 2089.60 && slb <= 3134.40) {
    desconto = (slb * 0.12) - 78.36;
  } else if (slb > 3134.40 && slb <= 6101.06) {
    desconto = (slb * 0.14) - 141.05;
  } else {
    desconto = 713.10;
  }

  desconto = parseFloat(desconto.toFixed(2))

  const irpf = parseFloat(calculaIRPF(slb, desconto).toFixed(2));

  const slbs = slb - desconto;

  let salarioLiquido = slbs - irpf;

  return {
    descontoINSS: desconto,
    descontoIRPF: irpf,
    liquido: parseFloat(salarioLiquido.toFixed(2))
  };
}

