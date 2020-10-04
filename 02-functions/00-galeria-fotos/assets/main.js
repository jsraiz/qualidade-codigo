/**
 * Este é uma simples galeria de fotos, onde listo via
 * JavaScript as thumbnails de cada, podendo navegar
 * entre as fotos clicando nessas thumbs ou simplesmente
 * avançando e voltando com as setas
 * 
 * É importante notar que sempre a foto ativa fica marcado
 * com a borda diferente. Além disso, também ativo ou
 * desativo as setas caso tenha a foto anterior ou próxima
 * 
 * TODO: Refatorar todo esse código, criando bastante funções.
 * TODO: Cada função com uma única responsabilidade
 * 
 * ! Temos a seguir um pobre código sem funções...
 */

const data = {
  _id: 1566754165,
  name: 'Cadeira Base Fixa New York Ii - Ecadeiras - Preto',
  description: 'Cadeira base fixa new york ii - ecadeirasa cadeira base fixa new york ii da ecadeiras é perfeita para quem deseja manter o escritório mais bonito, pois conta com um lindo design contemporâneo.essa cadeira tem estrutura em poliéster de altíssima qualidade, o que dá muito mais ...',
  price: {
    to_price: 329.9,
    from_price: 649.9
  },
  pictures: [
    'cadeira_base_fixa_new_york_ii_ecadeiras_preto_1566754165_25f1_300x300.jpeg',
    'cadeira_base_fixa_new_york_ii_ecadeiras_preto_1566754165_37c9_300x300.jpeg',
    'cadeira_base_fixa_new_york_ii_ecadeiras_preto_1566754165_9377_300x300.jpeg',
    'cadeira_base_fixa_new_york_ii_ecadeiras_preto_1566754165_541c_300x300.jpeg',
    'cadeira_base_fixa_new_york_ii_ecadeiras_preto_1566754165_f63d_300x300.jpeg'
  ],
  characteristics: {
    Produto: 'Cadeira',
    Cor: 'Preto',
    Tonalidade: 'Preto',
    Material_da_Estrutura: 'Metal',
    CômodoIndicado: 'Escritórios',
    Altura: '52 cm',
    Largura: '44 cm',
    Comprimento: '62 cm',
    Peso_do_Produto: '20 Kg',
    Marca: 'Ecadeiras',
    Garantia_do_Fabricante: '3 mes(es)'
  },
  installments: {
    amount: 3,
    value: '109,97'
  }
};

let posicao = 0;
let total = data.pictures.length;

let html = '';

for (let i = 0; i < total; i++) {
  html = html + `
    <a data-posicao="${i}" class="foto-item border mx-1 p-2" href="#" title="">
      <img src="fotos/${data.pictures[i]}"
        class="img-fluid" />
    </a>`
}

document.getElementById('container-fotos-lista').innerHTML = html;
document.getElementById('img-principal').src = `fotos/${data.pictures[posicao]}`;

const todasFotos = document.querySelectorAll('.foto-item');

for (let i = 0; i < todasFotos.length; i++) {
  todasFotos[i].addEventListener('click', function(event) {
    event.preventDefault();
    posicao = parseInt(event.currentTarget.getAttribute('data-posicao'), 10);

    document.getElementById('img-principal').src = `fotos/${data.pictures[posicao]}`;

    manipulaSetas();
    
  });
}

const botoes = document.querySelectorAll('.btn');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function(event) {
    event.preventDefault();

    if (event.currentTarget.id === 'btn-anterior') {
      if (posicao <= 0) {
        posicao = 0;
      } else {
        --posicao;
      }
    }

    if (event.currentTarget.id === 'btn-proximo') {
      if (posicao >= total - 1) {
        posicao = total - 1;
      } else {
        ++posicao;
      }
    }

    document.getElementById('img-principal').src = `fotos/${data.pictures[posicao]}`;

    manipulaSetas();

  })
}

let itensFotos = document.querySelectorAll('.foto-item');

function manipulaSetas() {
  if (posicao <= 0) {
    document.getElementById('btn-anterior').classList.add('disabled');
    document.getElementById('btn-proximo').classList.remove('disabled');
  } else if (posicao >= total - 1) {
    document.getElementById('btn-anterior').classList.remove('disabled');
    document.getElementById('btn-proximo').classList.add('disabled');
  } else {
    document.getElementById('btn-anterior').classList.remove('disabled');
    document.getElementById('btn-proximo').classList.remove('disabled');
  }

  for (let i = 0; i < itensFotos.length; i++) {
    if (i !== posicao) {
      itensFotos[i].classList.remove('border-primary');
    }
  }

  itensFotos[posicao].classList.add('border-primary');
}


manipulaSetas();