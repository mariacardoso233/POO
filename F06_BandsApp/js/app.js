import UserView from './js/views/UserView.js'
import CatalogView from './views/CatalogView.js'

class App {
    constructor() {
        this.userView = new UserView();
        this.catalogView = new CatalogView();

        //Apagar dps
        if (!localStorage.bands) {
            let bands = [];
            const band1 = { id: 1, name: "iKON", genre: "K-pop, Hip-hop", photo: "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,dpr_2.0,$w_750,$h_416/performer/1494561/j0nmtteefboqvdcdu8gv" }
            const band1 = { id: 2, name: "BTS", genre: "K-Pop, Hip-Hop, EDM, R&B", photo: "https://www.estrelando.com.br/uploads/2019/09/16/bts-ok-1568643218.jpg" }
            const band1 = { id: 3, name: "GOT7", genre: "K-pop, J-pop, Hip-hop, Trap, R&B", photo: "https://kpopping.com/uploads/documents/LHJ_8486_.jpeg" }
            const band1 = { id: 4, name: "NCT 127", genre: "K-pop, Hip-hop", photo: "https://3.bp.blogspot.com/-jcH5RB3b2UE/W71lu6TkgbI/AAAAAAAAGSA/MXw6sMokc6olKPkTK7FxbJF_u4C7OrCqACLcBGAs/s1600/IMG_20181010_093608.jpg" }
            const band1 = { id: 5, name: "PLT", genre: "R&B, Hip-hop", photo: "https://thumbnail.kpopmap.com/2018/09/PLT-11-680x384.jpg" }
            const band1 = { id: 6, name: "ATEEZ", genre: "K-pop, J-pop", photo: "https://conteudo.imguol.com.br/c/entretenimento/c0/2019/10/08/o-grupo-de-k-pop-ateez-1570536296196_v2_1220x775.jpg" }
            const band1 = { id: 7, name: "Big Bang", genre: "K-pop, J-pop ,R&B, Hip-hop", photo: "https://www.midiorama.com/wp-content/uploads/2018/03/bigbang-920x625.jpg" }
        }
    }
}

new App();