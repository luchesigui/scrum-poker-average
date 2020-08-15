const adicionarBotaoDeRecalcular = (showHideWrapperElement) => {
  const novoBotao = showHideWrapperElement.querySelector('button').cloneNode();
  novoBotao.innerText = 'RECALCULAR';
  novoBotao.style.marginLeft = '10px';
  novoBotao.setAttribute('class', 'mat-focus-indicator mat-stroked-button mat-button-base mat-primary');
  showHideWrapperElement.appendChild(novoBotao);
};

module.exports = {
  adicionarBotaoDeRecalcular,
};
