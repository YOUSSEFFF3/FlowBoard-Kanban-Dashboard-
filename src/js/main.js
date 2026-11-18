// $$$$$$$$$$$ *les variables*  $$$$$$$$$$$$ 
export let errorContainer = document.querySelector(".error-container");
export let errorMessage = document.querySelector(".error-message");
let mombbers = []
// $$$$$$$$$$$ data fille api js $$$$$$$$$$$$ 



import * as jalal from "./api.js"


// $$$$$$$$$$$data fille ui js$$$$$$$$$$$$ 

import * as larbi from "./ui.js"

// ££££££££££££££££££££££££££££££ *function callbaks* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$ *API call cart* $$$$$$$$$$$$$$$$$
// 
export let apiData = await jalal.apiData(larbi.paramss)

// console.log(apiData.data, donne);
try {
    larbi.resolve(apiData.data)

} catch (error) {
    larbi.rejected(error)

}
larbi.setDonne(apiData.data);
let momberApi = await jalal.mombers()
// console.log(momberApi);
try {
    larbi.resolveMobmbers(momberApi.data, mombbers)

} catch (error) {

    larbi.rejected(error)
}

// $$$$$$$$$$$$$$$$ *fAPI call mombers* $$$$$$$$$$$$$$$$$

jalal.mombers(larbi.affichMobmbers)








// $$$$$$$$$$$$$$$$ *EVENTS* $$$$$$$$$$$$$$$$$

let bouton = document.querySelector(".add")
bouton.addEventListener("click", larbi.newCart)

let form = document.querySelector(".creation-cart")
form.addEventListener("submit", larbi.formSubmit)

let retuen = document.querySelector(".return")
retuen.addEventListener("click", larbi.returnFunction)

let search = document.querySelector(".search")
search.addEventListener("input", larbi.searchFunction)

let statyys = document.querySelector(".filter-priorite")
statyys.addEventListener("change", larbi.statusFilter)

let mombeer = document.querySelector(".select-mombers")
mombeer.addEventListener("change", larbi.momberFiltre)

let delegation= document.querySelector(".les-taches")
delegation.addEventListener("click", (e) => {
    if (e.target.classList.contains("modifier")) {
        larbi.getcart(e);
    }

});

 let submitModifie=document.querySelector(".submit-modifie")
 submitModifie.addEventListener("click", larbi.submitLaModification)
let allCard=document.querySelector(".les-taches")
 allCard.addEventListener("change", larbi.selectOjectKeys);
 let chngeStatus=document.querySelector(".chagne-card-status")
 chngeStatus.addEventListener("click",larbi.changePositon)

 
 