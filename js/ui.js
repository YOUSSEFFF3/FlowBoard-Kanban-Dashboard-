import { donne, apiData } from "./api.js";
apiData()
export function affichage(cart) {
    console.log(cart);
    let card1 = document.querySelector(".cart-1")
    let card2 = document.querySelector(".cart-2")
    let card3 = document.querySelector(".cart-3")
    card1.innerHTML = ""
    card2.innerHTML = ""
    card3.innerHTML = ""
    cart.forEach(element => {
        if (element.status == "todo") {
            card1.innerHTML += ` <div class="cart ">
            <h2 class="titre fw-semibold fs-4">${element.title}</h2>
            <span class="labele fw-semibold">Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority btn-subtle theme-primary">${element.priority}</span>
            <span class="label fw-semibold">Personne assignée *</span>
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            </div>
            `
        } else if (element.status == "in-progress") {
            card2.innerHTML += ` <div class="cart ">
            <h2 class="titre fw-semibold fs-4">${element.title}</h2>
            <span class="label fw-semibold">Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority btn-subtle theme-primary">${element.priority}</span>
            <span class="label fw-semibold">Personne assignée *</span>
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            </div>
            `
        } else
            card3.innerHTML += ` <div class="cart ">
            <h2 class="titre fw-semibold fs-4">${element.title}</h2>
            <span class="label fw-semibold">Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority btn-subtle theme-primary">${element.priority}</span>
            <span class="label fw-semibold">Personne assignée *</span>
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            </div>`
    });
}
let bouton = document.querySelector(".add")
bouton.addEventListener("click", () => {
    document.querySelector(".cart-form").classList.remove("hide")
    document.querySelector(".les-taches").classList.add("hide")
})
let form = document.querySelector(".creation-cart")
form.addEventListener("submit", event => {
    event.preventDefault()
    let formDeta = new FormData(form)
    const forObj = Object.fromEntries(formDeta)
    console.log(forObj)
    donne.push(forObj)
    console.log(donne);
     document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
      affichage(donne)
reseting(form)
})
function reseting(form) {
    form.reset()
}
let retuen=document.querySelector(".return")
retuen.addEventListener("click",()=>{
     document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
      reseting(form)

})




