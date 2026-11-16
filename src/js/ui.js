import {  apiData, mombers, mombbers } from "./api.js";
import{ errorContainer,errorMessage, } from "./main.js";
export let paramss = {}   // empty box
export let donne=[]


let conTodo = 0
let conProgress = 0
let conDone = 0

export function affichage(cart) {
    let card1 = document.querySelector(".cart-1")
    let card2 = document.querySelector(".cart-2")
    let card3 = document.querySelector(".cart-3")
    conTodo = 0
    conProgress = 0
    conDone = 0
    card1.innerHTML = ""
    card2.innerHTML = ""
    card3.innerHTML = ""
    console.log(cart);
    cart.forEach(element => {
        if (element.status == "todo") {
            conTodo++
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
            conProgress++
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
        } else if (element.status == "done") {
            conDone++
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
        }

    });
    document.querySelector(".conterto").textContent = conTodo
    console.log(conTodo);

    document.querySelector(".conterpro").textContent = conProgress
    console.log(conProgress);

    document.querySelector(".conterdon").textContent = conDone
    console.log(conDone);

}
export function resolve(data){
    donne=data
         affichage(donne)
         errorContainer.classList.add("hide");
          document.querySelector(".form-search").classList.remove("hide")
          document.querySelector(".les-taches").classList.remove("hide")
    
}
export function rejected(error) {
    errorContainer.classList.remove("hide");
        document.querySelector(".form-search").classList.add("hide")
          document.querySelector(".les-taches").classList.add("hide")
         errorMessage.textContent =
             "Impossible de charger les tâches. " + error.message;
         console.log(error);
        
}
export function affichMobmbers(momber) {
    console.log(momber);
    let select = document.querySelector(".select-mombers")
    let forselect = document.querySelector("#select-assigne")

    momber.forEach(element => {
        select.innerHTML += `<option value="${element.name}">${element.name}</option>`
        forselect.innerHTML += `<option value="${element.name}">${element.name}</option>`
    });
}
export function newCart (){
    document.querySelector(".cart-form").classList.remove("hide")
    document.querySelector(".les-taches").classList.add("hide")
}

export function reseting(form) {
    form.reset()
}

export function returnFunction() {
    document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
    reseting(form)
}


export function searchFunction(e)  {
    let resultat = donne.filter(element =>
        element.title.toLowerCase().includes(
            e.target.value.toLowerCase()
        ));
    document.querySelector(".h1").classList.toggle("hide", resultat.length !== 0);
    affichage(resultat);
};
export function statusFilter(e)  {
    if (e.target.value != "") {
        paramss.priority= e.target.value;
    } else {
        paramss={}
    }
    apiData(paramss, affichage);
};

export function momberFiltre (e)  {
    if (e.target.value != "") {
        paramss.assignee= e.target.value;
    } else {
        paramss={}
    }
    apiData(paramss, affichage);
};
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





