const { adicionarAcaoDeCalculo } = require('./calcular');
const { adicionarBotaoDeRecalcular } = require('./recalcular');

const addActions = () => {
  const showHideWrapperElement = document.querySelector('.show-hide');
  const elementoDeResultados = document.querySelector('.results-title span');

  if (!showHideWrapperElement || !elementoDeResultados) {
    return;
  }

  adicionarBotaoDeRecalcular(showHideWrapperElement, elementoDeResultados);
  adicionarAcaoDeCalculo(showHideWrapperElement, elementoDeResultados);
};

module.exports = {
  addActions,
};
