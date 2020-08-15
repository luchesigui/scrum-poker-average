const { adicionarAcaoDeCalculo } = require('./calcular');
const { adicionarBotaoDeRecalcular } = require('./recalcular');

const addActions = () => {
  const showHideWrapperElement = document.querySelector('.show-hide');
  const elementoDeResultados = document.querySelector('.results-title span');
  const elementoDeDeletar = document.querySelector('.results-buttons > .ng-star-inserted:last-child');

  if (!showHideWrapperElement || !elementoDeResultados || !elementoDeDeletar) {
    return;
  }

  adicionarBotaoDeRecalcular(showHideWrapperElement, elementoDeResultados);
  adicionarAcaoDeCalculo(showHideWrapperElement, elementoDeResultados);
  adicionarAcaoDeCalculo(elementoDeDeletar, elementoDeResultados);
};

module.exports = {
  addActions,
};
