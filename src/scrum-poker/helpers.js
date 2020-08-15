const atualizaResultado = (elementoDeResultados, tituloOriginalDeResultados, media) => {
  elementoDeResultados.innerText = `${tituloOriginalDeResultados} - Média: ${media}`;
};

const restauraResultado = (elementoDeResultados, tituloOriginalDeResultados) => {
  elementoDeResultados.innerText = tituloOriginalDeResultados;
};

const calcularMedia = () => {
  const elementosDeStoryPoints = document.querySelectorAll('.cdk-column-storyPoints');
  const arrayDeStoryPoints = Array.from(elementosDeStoryPoints);
  const storyPoints = arrayDeStoryPoints
    .map(storyPoint => storyPoint.innerText)
    .map(Number)
    .filter(Boolean);
  const somatoriaDasHoras = storyPoints.reduce((acc, atual) => acc + atual, 0);
  const media = Math.ceil(somatoriaDasHoras / storyPoints.length);
  return media || 'Mostre os resultados primeiro';
};

const mediaDosVotos = (elementoDeResultados, tituloOriginalDeResultados) => {
  setTimeout(() => {
    const media = calcularMedia();
    atualizaResultado(elementoDeResultados, tituloOriginalDeResultados, media);
  }, 500);
};

module.exports = {
  restauraResultado,
  mediaDosVotos,
};
