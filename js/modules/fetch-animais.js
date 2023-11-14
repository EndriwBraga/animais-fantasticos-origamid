import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //cria a dvi contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os numeros de cada um dos animais
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //puxa os animais atravez de um arquivo json
  //e cria cada aniaml usando create animal
  async function criarAnimais() {
    try {
      //Fetch e espera a resposta e transoforma a resposta em json
      const animaisResponde = await fetch(url);
      const animaisJSON = await animaisResponde.json();
      // apos a transformação de json, ativa as funções para preecher e animar
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
