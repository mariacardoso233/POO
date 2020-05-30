import BandModel from '../models/BandModel.js'

export default class BandController {
    constructor() {
        this.bandModel = new BandModel()
    }

    getBands(filterName, filterGenre, isSorted) {

        if (isSorted) {
            this.bandModel.sort()
        }


        const band = this.bandModel.getAll()
        return bands
    }

}