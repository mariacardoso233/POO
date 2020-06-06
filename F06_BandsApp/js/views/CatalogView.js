import BandController from '../controllers/BandController.js'
import UserController from '../controllers/UserController.js'

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
        this.bindAddFilterEvent()
        this.bindAddSortEvent()
        this.bindAddRemoveEvent()
    }

    bindAddFilterEvent() {
        this.btnFilter.addEventListener('click', () => {
            this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value))
        })
    }

    bindAddSortEvent() {
        this.btnSort.addEventListener('click', () => {
            this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value, true))
        })
    }

    bindAddRemoveEvent() {
        for (const btnRemove of document.getElementsByClassName("remove")) {
            btnRemove.addEventListener('click', event => {
                this.bandController.removeBand(event.target.id)
                this.renderCatalog(this.bandController.getBands(this.txtBand.value, this.sltGenre.value))
            })
        }
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

        this.bindAddRemoveEvent()
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
                    <button id="${band.name}" class"btn btn-danger remove">Remove</button>
                </div>
            </div>
        </div>
    `


        return html

    }





}