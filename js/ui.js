import { donne, apiData, mombers ,mombbers} from "./api.js";
export let params = new URLSearchParams();   // empty box

apiData(params,affichage)

mombers(affichMobmbers)

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
            return { title: element.title, element: cart }
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
            return { title: element.title, element: cart }
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
        return { title: element.title, element: cart }

    });

}
export function affichMobmbers(momber) {
    console.log(momber);
    let select = document.querySelector(".select-mombers")
let forselect=document.querySelector("#select-assigne")
   
    momber.forEach(element => {
        select.innerHTML += `<option value="${element.name}">${element.name}</option>`
    forselect.innerHTML += `<option value="${element.name}">${element.name}</option>`
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
let retuen = document.querySelector(".return")
retuen.addEventListener("click", () => {
    document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
    reseting(form)
})

// export function filteer(data) {
//     if (!search.value) {
//         affichage(data)
//     }
//     search.addEventListener("input", (e) => {
//         const v = data.filter(element => {
//             return element.title.toLowerCase().includes(e.target.value.toLowerCase())
//         })
//         affichage(v)
//     })
//     statyys.addEventListener("change",(e)=>{
//         if (e.target.value!="") {
//            let y = data.filter(element => {
//             console.log(e.target.value);
//             return element.priority.includes(e.target.value)
//     })
//     affichage(y)
//     }else affichage(data)
// })
// mombeer.addEventListener("change",(e)=>{
//     if (e.target.value!="") {
        
//         let a = data.filter(element => {
//             console.log(e.target.value);
//             return element.assignee.includes(e.target.value)
//         })
//         affichage(a)
//     }else affichage(data)
// })
// }
let search = document.querySelector(".search")
search.addEventListener("input", (e) => {
    let resultat = donne.filter(element => {
        return element.title.toLowerCase().includes(
            e.target.value.toLowerCase()
        );
    });
    affichage(resultat);
});
let statyys=document.querySelector(".filter-priorite")
statyys.addEventListener("change", (e) => {
    if (e.target.value != "") {
        params.set("priority", e.target.value);
    } else {
        params.delete("priority");
    }
    apiData(params, affichage);
});
let mombeer=document.querySelector(".select-mombers")
mombeer.addEventListener("change", (e) => {
    if (e.target.value != "") {
        params.set("assignee", e.target.value);
    } else {
        params.delete("assignee");
    }
    apiData(params, affichage);
});




