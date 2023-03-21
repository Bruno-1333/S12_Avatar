const aventuriersLocal = [
    {
        "id": "1",
        "nom": "Oral Schmeler IV",
        "couleur": "#6c6b67",
        "avatar" : "http://placeimg.com/640/480/fashion"
    },
    {
        "id": "2",
        "nom": "Tad McLaughlin",
        "couleur": "#5d5c62",
        "avatar" : "http://placeimg.com/640/480/animals"
    },
    {
        "id": "3",
        "nom": "Matteo Wunsch",
        "couleur": "#454f41",
        "avatar" : "http://placeimg.com/640/480/technics"
    },
    {
        "id": "4",
        "nom": "Jack Beahan MD",
        "couleur": "#386b1f",
        "avatar" : "http://placeimg.com/640/480/abstract"
    }
];
let Listaventuriers = [];



class Aventurier {
    static cpt = 4;

    constructor(nom, couleur, avatar) {
        Aventurier.cpt++;
        this.id = Aventurier.cpt;
        this.nom = nom;
        this.couleur = couleur;
        this.avatar = avatar;
    }
}


function CreationAvatar() {
    let Nom = $('#Nom').val();
    let Couleur = $('#Couleur').val();
    let Value = parseInt($('#avatar').val());
    let Avatar = "";

    switch (Value) {
        case 1:
            Avatar = "http://placeimg.com/640/480/fashion";
            break;
        case 2:
            Avatar = "http://placeimg.com/640/480/animals";
            break;
        case 3:
            Avatar = "http://placeimg.com/640/480/technics";
            break;
        case 4:
            Avatar = "http://placeimg.com/640/480/abstract";
            break;
        default:
            "http://placeimg.com/640/480/fashion";
            break;
    }


    let aventurier = new Aventurier(Nom, Couleur, Avatar);
    Stokage(aventurier);
    AfficherAvatar(aventurier);

    return false;
}

function Stokage(aventurier) {

    if(Listaventuriers === null){
        Listaventuriers = [] // Si c'est la première fois la liste est null, il faut l'initialiser
    }

    Listaventuriers.push(aventurier);
    localStorage.setItem('aventuriers', JSON.stringify(aventuriersLocal));
}

function AfficherAvatar(avatar) {
    $('#Reception').append(
        `<div class="card" style="width: 18rem;">
        <img src="${avatar.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${avatar.nom}</h5>
            <p class="card-text">Id: ${avatar.id}</p>
            <p class="card-text">${avatar.couleur}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    );
}