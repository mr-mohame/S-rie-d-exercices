const ajouter = document.getElementById("ajouter");
const notes = document.getElementById("notes");
let compteur = 0
ajouter.addEventListener("click", function(){
    const li = document.createElement("li");
    // console.log(li);
    // createElement : cree un element, mais il n'est pas encore dans la page.
    // appendChild : ajoute l'element dans le DOM.
    compteur++
    li.textContent = `Note N°: ${compteur}`;
    li.classList.add("p-2", "bg-yellow-100", "rounded");
    notes.appendChild(li);
    // notes.append(li);
    // appendChild ajoute l'element a la fin.
    // prepend ajoute l'element au debut.
});
