const {
  mediaDosVotos,
  restauraResultado,
} = require('./helpers');

const adicionarAcaoDeCalculo = (elementoDeAcao, elementoDeResultados) => {
  const tituloOriginalDeResultados = elementoDeResultados.innerText;

  elementoDeAcao.addEventListener('click', (e) => {
    const elementClicked = e.target;
    const action = elementClicked.innerText;

    if (action === 'SHOW' || action === 'RECALCULAR') {
      mediaDosVotos(elementoDeResultados, tituloOriginalDeResultados);
      return;
    }

    if (action === 'HIDE' || action === 'DELETE ESTIMATES') {
      restauraResultado(elementoDeResultados, tituloOriginalDeResultados);
    }
  });
};

module.exports = {
  adicionarAcaoDeCalculo,
};
