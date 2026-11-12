const btn = document.querySelector("#go");
const zoneTexte = document.querySelector("#zoneTexte");
const zoneHtml = document.querySelector("#zoneHtml");

// const message = '<strong>Promo</strong> : -20 % sur les claviers';

const message = '<img src=x onerror="alert(1)">'
// textContent affiche le contenu comme texte sans exécuter les balises HTML.
// innerHTML interprète le HTML, ce qui peut créer une faille XSS avec un contenu non fiable.

// console.log(btn, zoneTexte, zoneHtml, message);

btn.addEventListener("click", function(){
    zoneTexte.textContent=message
    // zoneHtml.innerHTML+=message
    zoneHtml.innerHTML=message

    zoneHtml.innerHTML += "Fin";
    console.log(zoneHtml.innerHTML);

// La différence entre textContent et innerHTML est que :
// textContent affiche le contenu comme un simple texte, sans interpréter les balises HTML.
// innerHTML interprète les balises HTML et affiche leur rendu.
});