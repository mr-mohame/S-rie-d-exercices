const message = document.querySelector("#message");
console.log(message);

// input : se declenche à chaque modification du texte.
// change : se declenche lorsque la modification est validee, generalement en quittant le champ.
message.addEventListener("input", function(){
    const msgInput = message.value
     const nombreCaracteres = msgInput.length
    const compteur = document.querySelector("#compteur");
    compteur.textContent = `${nombreCaracteres} / 50`
    if(nombreCaracteres <= 50){
        compteur.classList.remove("text-red-600");
        compteur.classList.add("text-gray-600");
    }else{
        compteur.classList.remove("text-gray-600");
        compteur.classList.add("text-red-600");
    }

    const envoyer = document.querySelector("#envoyer");
    
    if(message.value.length === 0 || nombreCaracteres > 50){
        envoyer.disabled = true
    }else {
        envoyer.disabled = false
    }

})
