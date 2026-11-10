import { donne,apiData } from "./api.js";
let arara=10
apiData()
export function affichage(cart) {
    console.log(cart);
    let card1=document.querySelector(".cart-1")
    let card2=document.querySelector(".cart-2")
    let card3=document.querySelector(".cart-3")
    cart.forEach(element => {
        if (element.status=="todo") {
            card1.innerHTML+=` <div class="cart">
            <h2 class="titre">${element.title}</h2>
            <span>Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority">${element.priority}</span>
            <span>Personne assignée *</span>
            <div class="person-box">
            <span class="assignee">${element.assignee}</span>
            </div>
            </div>
            ` 
        } else if (element.status=="in-progress") {
             card2.innerHTML+=` <div class="cart">
            <h2 class="titre">${element.title}</h2>
            <span>Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority">${element.priority}</span>
            <span>Personne assignée *</span>
            <div class="person-box">
            <span class="assignee">${element.assignee}</span>
            </div>
            </div>
            `  
        }else
            card3.innerHTML+=` <div class="cart">
            <h2 class="titre">${element.title}</h2>
            <span>Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <span class="priority">${element.priority}</span>
            <span>Personne assignée *</span>
            <div class="person-box">
            <span class="assignee">${element.assignee}</span>
            </div>
            </div>` 

    });  
}

