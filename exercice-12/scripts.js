const produits = [
  { nom: 'Clavier', prixHT: 250 },
  { nom: 'Souris', prixHT: 90 },
  { nom: 'Écran', prixHT: 1400 }
];

// affiche les noms de produits avec map

// const produit = produits.map(prod => prod.nom)
// console.log(produit)
//-----------------------------------------------
// map() : crée un nouveau tableau.
// forEach() : parcourt chaque élément.
//-----------------------------------------------
// affiche les noms de produits avec forEch
const noms = [];
produits.forEach(produit => {
    noms.push(produit.nom);
});
console.log(noms);


const produitsTTC = produits.map((produit) => {
    return{ ...produit,
        prixTTC: produit.prixHT * 1.2
    };

})
console.log(produitsTTC)

const testProduit = produitsTTC.map((produit) => {
    return `${produit.nom} : ${produit.prixTTC} DH TTC`
})
console.log(testProduit)

const etiquettes = document.querySelector("#etiquettes");

testProduit.forEach(texte => {
    const li = document.createElement("li");

    li.textContent = texte;

    etiquettes.appendChild(li);
});

