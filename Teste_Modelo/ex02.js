let letter = "A"
const tds = document.getElementsByTagName('td')
for (const td of tds) {
    //Adicionar o evento click para o "quadrado" da tabela
    td.addEventListener('click', event => {
        //Se o "alvo" innerHTML estiver vazio
        if (event.target.innerHTML === "") {
            //ele irá preencher com uma letra
            event.target.innerHTML = letter
                //Função para seguir o abecedario a partir da string dada na "letter"
            letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        }
        //Se o event click tiver o seu "alvo (innerHTML)" preenchido ele dará um alerta 
        else {
            alert("Célula já ocupada!")
        }
    })
}