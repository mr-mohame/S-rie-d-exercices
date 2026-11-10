const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
console.log(courses[0])
console.log(courses[3])
console.log(courses.length)

const total = document.getElementById("total");

total.textContent = `${courses.length} courses`;

const liste = document.getElementById("liste")

// for(let i=0; i<courses.length; i++){
//     const li = document.createElement("li");
//     li.textContent=courses[i];
//     liste.appendChild(li)
    

// }
courses.push("Café");
courses.forEach((course, index) => {
    const li = document.createElement("li");
    li.textContent=`${index + 1}. ${course}`;
    liste.appendChild(li)
    

});

