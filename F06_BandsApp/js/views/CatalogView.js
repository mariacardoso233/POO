import BandController from '../controllers/BandController.js'

export default class BandView {
    constructor() {
        this.bandController = new BandController()

        //Catalog
        this.catalog = document.guerySelector("myCatalog")
        this.btnFilter = document.guerySelector("btnFilter")
        this.btnSort = document.guerySelector("btnSort")
        this.txtBand = document.guerySelector("txtBand")
        this.sltGenre = document.guerySelector("sltGenre")

        this.renderCatalog(this.bandController.getBands())
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.bandController.getBands('', '', true))
        })
    }





    renderCatalog(bands = []) {
        let result = ''
        let i = 0
        for (const band of bands) {
            if (i % 3 === 0) { result += `<div class="row">` }

            result += this._generateBandCard(band)
            i++

            if (i % 3 === 0) { result += `</div>` }
        }
        this.catalog.innerHTML = result
    }



    _generateBandCard(band) {
        let html = `
        <div class="sm-4">
            <div class="card">
                <img class="card-img-top" src="${band.photo}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${band.name}</h4>
                    <p class="card-text">${band.genre}</p>
                    <button id="${band.id}" class"btn btn-primary">See More</button>
                    <button id="${band.name}" class"btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    `


        return html

    }





}