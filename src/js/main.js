// $$$$$$$$$$$ *les variables*  $$$$$$$$$$$$ 
export  let errorContainer = document.querySelector(".error-container");
export let errorMessage = document.querySelector(".error-message");
// $$$$$$$$$$$ data fille api js $$$$$$$$$$$$ 

import * as jalal from "./api.js"
console.log(jalal);


// $$$$$$$$$$$data fille ui js$$$$$$$$$$$$ 

import * as larbi from "./ui.js"

// ££££££££££££££££££££££££££££££ *function callbaks* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$ *API call cart* $$$$$$$$$$$$$$$$$

 export let apiData = await jalal.apiData(larbi.paramss)
console.log(apiData.data);

try {
    larbi.resolve(apiData.data)
    
} catch (error) {
    larbi.rejected(error)
    
}


// $$$$$$$$$$$$$$$$ *fAPI call mombers* $$$$$$$$$$$$$$$$$

jalal.mombers(larbi.affichMobmbers)








// $$$$$$$$$$$$$$$$ *EVENTS* $$$$$$$$$$$$$$$$$

let bouton = document.querySelector(".add")
bouton.addEventListener("click",larbi.newCart)

let form = document.querySelector(".creation-cart")
form.addEventListener("submit",larbi.formSubmit)

let retuen = document.querySelector(".return")
retuen.addEventListener("click",larbi.returnFunction)

let search = document.querySelector(".search")
search.addEventListener("input",larbi.searchFunction)

let statyys = document.querySelector(".filter-priorite")
statyys.addEventListener("change",larbi.statusFilter)

let mombeer = document.querySelector(".select-mombers")
mombeer.addEventListener("change",larbi.momberFiltre)