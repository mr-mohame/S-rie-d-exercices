const moins = document.getElementById("moins");
const valeur = document.getElementById("valeur");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
// console.log(moins, valeur, plus, reset);
let compteur = 0;
plus.addEventListener("click", function () {
    compteur++;
    valeur.textContent = compteur;
});
moins.addEventListener("click", function () {
    if (compteur > 0) {
        compteur--;
        valeur.textContent = compteur;
    }
})
reset.addEventListener("click", function(){
    compteur = 0;
    valeur.textContent = compteur;
})

// function : on passe la fonction a executer au clic.
// function () : on execute la fonction immediatement, sans attendre le clic.