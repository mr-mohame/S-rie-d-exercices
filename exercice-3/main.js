const badge = document.getElementById("badge");
const stock = 0;
if(stock == 0){
    badge.textContent = "Rupture";
    badge.classList.add("bg-red-200");
}else if(stock > 0 && stock <= 3){
    badge.textContent = "Presque épuisé";
    badge.classList.add("bg-yellow-200");
}else{
    badge.textContent = "Disponible";
    badge.classList.add("bg-green-200");
}
