let questoes = document.querySelectorAll(".direita .questao");

/* - event.currentTarget é bom para ser usado quando nós queremos associar o mesmo event handler para vários elementos.
nextElementSiblingpropriedade somente leitura retorna o elemento imediatamente após o especificado na lista de filhos de seu pai
- children no JavaScript retorna uma coleção com todos os elementos filhos do elemento HTML pelo qual foi chamado; Os elementos filhos como estão inseridos em um objeto array, podem ser acessados por números de índice. Atenção: O índice sempre começa em 0 (zero)
*/

/*rotação da seta*/
let faq = (perguntas) => {
  let resposta = perguntas.currentTarget.nextElementSibling;
  let questao = perguntas.currentTarget.children[0];
  let icone = perguntas.currentTarget.children[1];

  if (resposta.style.display === "none") {
    resposta.style.display = "block";
    questao.style.fontWeight = "700";
    icone.style.transform = "rotate(180deg)";
  } else {
    resposta.style.display = "none";
    questao.style.fontWeight = "400";
    icone.style.transform = "rotate(0deg)";
  }
};
/*event de click*/
/*for of percorre os valores de um objeto iterável*/
for (let questao of questoes) {
  let resposta = questao.nextElementSibling;
  resposta.style.display = "none";
  questao.addEventListener("click", faq);
}
