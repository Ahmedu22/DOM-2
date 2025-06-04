// inner Text
// text conteny
// innerHTML



// 1. inner Text

const p = document.querySelector("p");
console.log(p.innerText);

//formatted & will not show the tags


// 2. text conteny
console.log(p.textContent);

//not formatted & will show the script tag


// 3. innerHTML
console.log(p.innerHTML);

//will show all the content plus the innerHTML



//CHANGING VALUE
const h1 = document.querySelector("h1");
h1.innerText = ("Ahmed Yussuf ")
h1.innerHTML = "<button>ahmed</button>"