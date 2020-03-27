const myTextBox = document.querySelector('input[type = "text"]');
const myP = document.querySelector('p');
const myButton = document.querySelector('input[type = "button"]');

/*Alinea B) Adicione ao ficheiro uma caixa de texto e um parágrafo. 
            Crie um listener que vai reproduzir o que for escrito na caixa de texto para o parágrafo. 
            Altere o evento do clique do botão para apresentar o nº de caracteres escrito 
 
myTextBox.addEventListener('input', function(){
    myP.innerHTML = myTextBox.value;
});

myButton.addEventListener('click', function(){
    alert(myTextBox.value.length);
});
*/

/*Alinea C) Adicione um novo listener ao botão que ao fim da pressão do botão deve enviar uma
          mensagem para a consola com o texto “obrigado pelo clique no botão!”

myButton.addEventListener('mouseup', function(){
    console.log("obrigado pelo clique no botão!");
});
*/

//Alinea D) Faça com que todo o código JavaScript seja só executado após o carregamento da
//          página em memória

window.addEventListener('load', function(){
    myTextBox.addEventListener('input', function(){
        myP.innerHTML = myTextBox.value;
    });
    
    myButton.addEventListener('click', function(){
        alert(myTextBox.value.length);
    });

    myButton.addEventListener('mouseup', function(){
        console.log("obrigado pelo clique no botão!");
    });

});