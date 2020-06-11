import UserView from './views/UserView.js'
import CatalogView from './views/CatalogView.js'
import BandDetailView from './views/BandDetailView.js'
import BandAddView from './views/BandAddView.js'

class App {
    constructor() {
        this.routes = {
            '': [
                UserView,
                CatalogView
            ],
            'index': [
                UserView,
                CatalogView
            ],
            'band': [
                BandDetailView
            ],
            'addBand': [
                BandAddView
            ]
        };

        // import dummy data for testing purposes
        this._importDataFixtures();

        // instantiate the views mapped in the routes object
        this._instantiateViews();
    }

    _instantiateViews() {
        const path = window.location.pathname
        const file = path.substr(path.lastIndexOf('/') + 1);
        const route = file.split('.')[0];

        const views = this._getViews(route);

        for (const view of views) {
            new view();
        }
    }

    _getViews(route) {
        return typeof this.routes[route] === 'undefined' ? [] : this.routes[route];
    }

    _importDataFixtures() {
        const bands = [{
                id: 1,
                name: 'iKON',
                genre: 'Hip-Hop',
                photo: 'https://c-sf.smule.com/sf/s77/arr/7d/ea/de26a1fd-9574-452a-9cd9-38e3cd04d9a3_256.jpg',
                description: 'Genre: K-pop, Hip-hop // Debut: 2015// Label: YG Entertainment // Members: B.I, Jinhwan, Yunhyeong, Bobby, Donghyuk, Junhoe, Chanwoo'
            },
            {
                id: 2,
                name: 'BTS',
                genre: 'K-Pop',
                photo: 'https://pbs.twimg.com/profile_images/828729925217746945/AgMZdPiL.jpg',
                description: 'Debut: 2013 // Label: Big Hit Entertainment // Members: Jin, Suga, J-Hope, RM, Jimin, V, Jungkook'
            },
            {
                id: 3,
                name: 'GOT7',
                genre: 'K-pop',
                photo: 'https://cdn130.picsart.com/321294967494201.jpg?type=webp&to=crop&r=256',
                description: 'Debut: 2014 // Label: JYP Entertainment // Members: Mark, JB, Jackson, Jinyoung, Youngjae, BamBam, Yugyeom'
            },
            {
                id: 4,
                name: 'NCT 127',
                genre: 'Hip-Hop',
                photo: 'https://c-sf.smule.com/rs-s95/arr/c9/6e/c06d079f-d19d-406d-9cd9-9001382993a7.jpg',
                description: 'Genre: k-pop, hip-hop // Debut: 2016 // Label: SM // Members: Taeil, Johnny, Taeyong, Yuta, Doyoung, Jaehyun, Winwin, Jungwoo, Mark, Haechan'
            },
            {
                id: 5,
                name: 'PLT',
                genre: 'R&B',
                photo: 'https://c-sf.smule.com/rs-s79/arr/a6/22/336af388-048b-4a97-bb4d-31a078191e48.jpg',
                description: 'Genre: r&b, hip-hop // Debut: 2018 // Label: Planetarium Record // Mambers: June, Moti, Jung Jinwoo, Gaho, Villain and Kei.G'
            },
            {
                id: 6,
                name: 'ATEEZ',
                genre: 'K-pop',
                photo: 'https://pm1.narvii.com/7273/37d692975f291bce2f71244746ec61c61413cce8r1-634-634v2_00.jpg',
                description: 'Genre: K-pop, J-pop // Debut: 2018 // Label: KQ Entertainment // Mambers: Hongjoong, Seonghwa, Yunho, Yeosang, San, Mingi, Wooyoung, and Jongho '
            },
            {
                id: 7,
                name: 'BIGBANG',
                genre: 'K-pop',
                photo: 'https://kprofiles.com/wp-content/uploads/BigBang.jpg',
                description: 'Genre: K-pop, J-pop, hip-hop, dance electronic, R&B // Debut: 2006 // Label: YG Entertainment // Mambers: T.O.P, Taeyang, G-Dragon, Daesung, Seungri (ex-member)'
            },
        ];

        const users = [{
            id: 1,
            username: 'user',
            password: 'user'
        }];

        // Load the fixtures in case there is no data in the local storage 
        if (!localStorage.bands) {
            localStorage.setItem('bands', JSON.stringify(bands));
        }
        if (!localStorage.users) {
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

new App();