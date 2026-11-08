console.log('JS connecté');

const Nom = "Clavier";
let prix = 250;

const titer = document.getElementById("nom");
const prixElement = document.getElementById("prix");

titer.textContent= Nom ;
prixElement.textContent= prix + " " + "DH";

prix = 199

prixElement.textContent= prix + " " + "DH";

nom = "Souris"