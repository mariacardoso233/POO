const frmGame = document.querySelector('form');

//Alinea C)

frmGame.addEventListener("submit", function(event) {
    const txtGameYear = document.querySelector("#txtGameYear").value;

    if (txtGameYear > 1950 && txtGameYear <= new Date().getFullYear()) {
        alert('Validação OK!');

        const table = document.querySelector('table');
        const gameName = document.querySelector('#txtGameName').value;
        const gameYear = document.querySelector('#txtGameYear').value;
        const gameGenre = document.querySelector('#sltGameGenre').value;
        const gameCover = document.querySelector('#urlGameCover').value;

        let line = document.createElement('tr');
        line.innerHTML = `
            <tr>
                <td>${gameName}</td>
                <td>${gameYear}</td>
                <td>${gameGenre}</td>
                <td><img src="${gameCover}"></td>
                <td><input type="button" value="x"></td>
            </tr>
        `;

        table.append(line);


        //Alinea C)
        buttonX = line.getElementsByTagName('input')[0];
        buttonX.addEventListener('click', function() {
            this.parentNode.parentNode.remove();
        });



    } else {
        alert("Erro!!");
    }

    frmGame.reset();
    event.preventDefault();

});