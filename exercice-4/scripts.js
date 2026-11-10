function calculerTTC(prixHT){
    let TTC = prixHT + (prixHT * 0.2);
    return TTC

}
console.log(calculerTTC(100))

function afficherPrix(selecteur, prixHT) {

    const selecteurP1 = document.querySelector(selecteur);

    const prixTTC = calculerTTC(prixHT);

    selecteurP1.textContent = `HT : ${prixHT} DH · TTC : ${prixTTC} DH`;
}
afficherPrix("#p1", 100);
afficherPrix("#p2", 45);
afficherPrix("#p3", 320);