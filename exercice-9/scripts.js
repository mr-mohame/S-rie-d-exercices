const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];

console.log(produits[1].nom);
console.log(produits[2].prix);

const cataloguePro = document.getElementById("catalogue")
// avec for 
// for(let i=0; i<produits.length; i++){
//     cataloguePro.appendChild(creerFiche(produits[i]))
    

// }

// avec forEch
produits.forEach((produit)=>{
    cataloguePro.appendChild(creerFiche(produit))
})


function creerFiche(produit){
    const { nom, prix, stock } = produit;
    const articale = document.createElement("article")
    articale.classList.add("border", "p-4", "rounded-lg")

    const titre = document.createElement("h2");
    titre.textContent= nom
    
    const prixPro = document.createElement("p");
    prixPro.textContent= `${prix}  DH`

    if(stock === 0){
        const Rupture = document.createElement("p");
        Rupture.textContent = "Rupture";
        Rupture.classList.add("text-red-500");
        articale.appendChild(Rupture)


    }
    
    articale.appendChild(titre);
    articale.appendChild(prixPro);
    
    return articale;
   
}
