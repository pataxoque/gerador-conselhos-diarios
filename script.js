const conselhos = [
    "Acredite em você mesmo.", "O primeiro passo é o mais importante.",
    "A persistência realiza o impossível", "Aprenda algo novo hoje", "Seja gentil com todos"

]
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselho = document.getElementById('novoConselhoBtn');

function gerarConselho() {
    //BUG INTENCIONAL ^
    const indice = Math.floor(Math.random() * (conselhos.lenght +1));
    conselhoTexto.textContent = conselhos[indice];

}
novoConselhoBtn.addEventListener('click', gerarConselho);
//array: constante ou variável contendo mais de uma informação