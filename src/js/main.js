// $$$$$$$$$$$ *les variables*  $$$$$$$$$$$$ 
export let errorContainer = document.querySelector(".error-container");

export let errorMessage = document.querySelector(".error-message");

let mombbers = []

import * as api from "./api.js"

import * as ui from "./ui.js"
// ££££££££££££££££££££££££££££££ *function callbaks* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

export let apiData = await api.apiData(ui.paramss)

// console.log(apiData.data, donne);
try {
    ui.resolve(apiData.data)
} catch (error) {
    ui.rejected(error)
}
ui.setDonne(apiData.data);
let momberApi = await api.mombers()
// console.log(momberApi);
try {
    ui.resolveMobmbers(momberApi.data, mombbers)
} catch (error) {
    ui.rejected(error)
}
// $$$$$$$$$$$$$$$$ *fAPI call mombers* $$$$$$$$$$$$$$$$$

// api.mombers(ui.affichMobmbers)








// $$$$$$$$$$$$$$$$ *EVENTS* $$$$$$$$$$$$$$$$$

let bouton = document.querySelector(".add")
bouton.addEventListener("click", ui.newCart)

let form = document.querySelector(".creation-cart")
form.addEventListener("submit", ui.formSubmit)

let refrechBtn=document.querySelector(".refresh-btn")
refrechBtn.addEventListener("click",()=>{
    location.reload()
})

let retuen = document.querySelector(".return")
retuen.addEventListener("click", ui.returnFunction)

let search = document.querySelector(".search")
search.addEventListener("input", ui.searchFunction)

let statyys = document.querySelector(".filter-priorite")
statyys.addEventListener("change", ui.statusFilter)

let mombeer = document.querySelector(".select-mombers")
mombeer.addEventListener("change", ui.momberFiltre)

let delegation= document.querySelector(".les-taches")
delegation.addEventListener("click", ui.optionButton);
delegation.addEventListener("change", ui.selectOjectKeys);

let chngeStatus=document.querySelector(".chagne-card-status")
chngeStatus.addEventListener("click",ui.alert)

 let submitModifie=document.querySelector(".submit-modifie")
 submitModifie.addEventListener("click", ui.submitLaModification)
 let craetAi=document.querySelector(".ai-creation")
 let butonnAi=document.querySelector(".add-ai")
 butonnAi.addEventListener("click",()=>{
    document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.add("hide")
    craetAi.classList.remove("hide")
 })
 let aiReturn=document.querySelector(".return-ai-btn")
 aiReturn.addEventListener("click",()=>{
     document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
    craetAi.classList.add("hide")
 })
let aiForm = document.querySelector(".ai-form")
aiForm.addEventListener("submit", ui.aiFormSubmit)

 
 