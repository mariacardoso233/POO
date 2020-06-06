export default class BandModel {
    constructor() {
        //Verificar se já existe ou não uma chave na local storage
        this.bands = localStorage.bands ? JSON.parse(localStorage.bands) : [];
    }

    getAll() {
        //quem chamar a função vai receber todas as bandas atuais
        return this.bands;
    }

    create(name, genre, photo, description, video) {
        const band = {
            id: this.bands.length > 0 ? this.bands[this.bands.length - 1].id + 1 : 1,
            name: name,
            genre: genre,
            photo: photo,
            description: description,
            video: video
        }
        this.bands.push(band);
        this._persist();
    }

    sort() {
        this.bands.sort(this._compare);
        this._persist();
    }


    remove(name) {
        this.bands = this.bands.filter(band => band.name != name)
        this._persist()
    }


    _persist() {
        localStorage.setItem('bands', JSON.stringify(this.bands));
    }

    _compare(bandA, bandB) {
        if (bandA.name < bandB.name)
            return -1;
        if (bandA.name > bandB.name)
            return 1;
        return 0;
    }
}