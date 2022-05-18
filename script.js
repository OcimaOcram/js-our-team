const contenitore = document.getElementById("Contenitore");

const addcard = document.getElementById("addMemberButton");
addcard.addEventListener('click', () => start());
function start() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const img = document.getElementById("image").value;
    const dipendente = inputDipendente(name, role, img);
    stampaDipendente(dipendente);
};
function inputDipendente(name, role, img) {
    const oggetto = {
        'nome': name,
        'ruolo': role,
        'foto': img
    }
    return oggetto;

}
const arrayDipendenti = [
    {
        'nome': "angela Caroll",
        'ruolo': "editor",
        'foto': "img/angela-caroll-chief-editor.jpg"
    },
    {
        'nome': "angela lopez",
        'ruolo': "social-media manager",
        'foto': "img/angela-lopez-social-media-manager.jpg"
    },
    {
        'nome': "barbara rammos",
        'ruolo': "graphic designer",
        'foto': "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        'nome': "lorenzo",
        'ruolo': "graphic designer",
        'foto': "img/new-team-member-02.jpg"
    }
]
function stampaDipendente(dipendente) {

    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    const divCardImage = document.createElement("div");
    divCardImage.classList.add("card-image");
    const cardImage = document.createElement("img");
    divCardImage.appendChild(cardImage);
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    const cardName = document.createElement("h3");
    const cardRuolo = document.createElement("p");
    cardText.appendChild(cardName);
    cardText.appendChild(cardRuolo);
    teamCard.appendChild(divCardImage);
    teamCard.appendChild(cardText);
    cardName.innerText = dipendente.nome;
    cardRuolo.innerText = dipendente.ruolo;
    cardImage.src = dipendente.foto;
    contenitore.appendChild(teamCard);
    console.log(teamCard);
}
function creazioneDipendente() {
    for (let i = 0; i < arrayDipendenti.length; i++) {
        const dipendente = arrayDipendenti[i];
        stampaDipendente(dipendente);
    }
};
creazioneDipendente();