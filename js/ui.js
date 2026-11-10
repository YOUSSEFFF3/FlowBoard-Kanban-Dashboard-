import { donne ,apiData } from "./api.js";



apiData()
export function affichage(cart) {
    console.log(cart);
    let card1=document.querySelector(".cart-1")
    let card2=document.querySelector(".cart-2")
    let card3=document.querySelector(".cart-3")
    cart.forEach(element => {
        if (element.status=="todo") {
            card1.innerHTML+=` <div class="cart ">
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
        } else if (element.status=="in-progress") {
             card2.innerHTML+=` <div class="cart ">
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
        }else
            card3.innerHTML+=` <div class="cart ">
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



