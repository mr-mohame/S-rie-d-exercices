const note = document.querySelectorAll(".note");
const Note = document.getElementsByClassName("note")
console.log(note);
console.log(Note);

const btnSurligner = document.querySelector("#surligner");
console.log(btnSurligner);

btnSurligner.addEventListener("click", function(){
    // avec for
    // for(let i=0; i<note.length; i++){
    //     note[i].classList.toggle("bg-yellow-200")
    // }

     // pour 
    note.forEach((note) => {
        note.classList.toggle("bg-yellow-200");
    });

    // avec forEch : HTMLCollection ne prend pas en charge 
    // directement la méthode forEach()

    // Note.forEach((note) => {
    //     note.classList.toggle("bg-yellow-200");
    // });

    // on a utulise Array.from(Note)
    // Array.from(Note).forEach((note)=>{
    //     console.log(note)
    // })
});

const btnLire = document.getElementById("lire");
btnLire.addEventListener("click", () => {
    const themes = document.getElementsByName("theme")
    themes.forEach((theme)=>{
        if(theme.checked){
            console.log(theme.value);
            
        }
    })

})

const nouvNote = document.createElement("p");
nouvNote.classList.add("note");
nouvNote.textContent = "Note D"

document.body.appendChild(nouvNote)

console.log(note.length);
console.log(Note.length);

// 1er console affiche 3 car querySelectorAll() retourne une NodeList statique,
// 2eme console affiche 4 car  getElementsByClassName() retourne une HTMLCollection dynamique.


