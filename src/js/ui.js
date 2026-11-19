
import { errorContainer, errorMessage } from "./main.js";
import { cardGet, cartChange, apiData ,cardStatusChange,cardSupression} from "./api.js";
export let paramss = {}   // empty box
export let donne = []
export let selectedCard = {};
let conTodo = 0
let conProgress = 0
let conDone = 0
export function setDonne(data) {
    donne = data;
}
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
    // console.log(cart);
    cart.forEach(element => {
        if (element.status == "todo") {
            conTodo++
            card1.innerHTML += ` <div class="cart ">
            <h2 class="titre fw-semibold fs-4">${element.title}</h2>
            <span class="label fw-semibold">Description *</span>
            <div class="box-description">
            <p class="description">${element.description}</p>
            </div>
            <div class="changeplace">
             <span class="priority btn-subtle theme-primary">${element.priority}</span>
             <select class="form-control validationCustom04" data-id="${element.id}">
              <option disabled value="">Choose…</option>
              <option value="${element.status}"selected >${element.status}</option>
              <option value="in-progress">in-progress</option>
              <option value="done">done</option>
              </select>
            </div>
            <span class="label fw-semibold">Personne assignée *</span>
            <div class="asiiig">
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            <button class="modifier btn-outline theme-primary" data-id=${element.id}>Modifier</button>
            </div>
            <div class="suprim-box">
             <button class="supresion btn-outline theme-danger" data-id=${element.id} >Suppresion</button>
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
            <div class="changeplace">
             <span class="priority btn-subtle theme-primary">${element.priority}</span>
             <select class="form-control validationCustom04"  data-id="${element.id}" >
              <option disabled value="">Choose…</option>
              <option value="todo">todo</option>
              <option value="${element.status}" selected>${element.status}</option>
              <option value="done">done</option>
             </select>
            </div>      
            <span class="label fw-semibold">Personne assignée *</span>
            <div class="asiiig">
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            <button class="modifier btn-outline theme-primary" data-id=${element.id}>Modifier</button>
            </div>
            <div class="suprim-box">
              <button class="supresion btn-outline theme-danger" data-id=${element.id} >Suppresion</button>
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
            <div class="changeplace">
             <span class="priority btn-subtle theme-primary">${element.priority}</span>
             <select class="form-control validationCustom04" data-id="${element.id}" >
              <option disabled value="">Choose…</option>
              <option value="todo">todo</option>
              <option value="in-progress" >in-progress</option>
              <option value="${element.status}" selected>${element.status}</option>
             </select>
            </div>  
             <span class="label fw-semibold">Personne assignée *</span>
            <div class="asiiig">
            <div class="person-box">
            <span class="assignee fw-normal">${element.assignee}</span>
            </div>
            <button class="modifier btn-outline theme-primary" data-id=${element.id} >Modifier</button>
            </div>
            <div class="suprim-box">
              <button class="supresion btn-outline theme-danger" data-id=${element.id} >Suppresion</button>
            </div>
            </div>`
        }
    });
    document.querySelector(".conterto").textContent = conTodo
    // console.log(conTodo);

    document.querySelector(".conterpro").textContent = conProgress
    // console.log(conProgress);

    document.querySelector(".conterdon").textContent = conDone
    // console.log(conDone);

}

export function resolve(data) {
    affichage(data)
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
    // console.log(error);

}
export function resolveMobmbers(response, arry) {
    arry = response
    // console.log(arry);
    let select = document.querySelector(".select-mombers")
    let forselect = document.querySelector("#select-assigne")

    arry.forEach(element => {
        select.innerHTML += `<option value="${element.name}">${element.name}</option>`
        forselect.innerHTML += `<option value="${element.name}">${element.name}</option>`
    });
}
export function newCart() {
    document.querySelector(".cart-form").classList.remove("hide")
    document.querySelector(".les-taches").classList.add("hide")
    let h2 = document.querySelector(".h2")
    h2.innerHTML = ""
    h2.innerHTML = "Nouvelle cart "
    document.querySelector(".submit-card").classList.remove("hide")
    document.querySelector(".submit-modifie").classList.add("hide")
    document.querySelector(".datee").classList.remove("hide")
}

export function reseting(form) {
    form.reset()
}

export function returnFunction() {
    document.querySelector(".cart-form").classList.add("hide")
    document.querySelector(".les-taches").classList.remove("hide")
    let form = document.querySelector(".creation-cart");
    reseting(form)
}

export function searchFunction(e) {
    let resultat = donne.filter(element =>
        element.title.toLowerCase().includes(
            e.target.value.toLowerCase()
        ));
    document.querySelector(".h1").classList.toggle("hide", resultat.length > 0);
    affichage(resultat);
};
export async function statusFilter(e) {
    if (e.target.value != "") {
        paramss.priority = e.target.value;
    } else {
        delete paramss.priority
    }
    let filteredData = await apiData(paramss)
    resolve(filteredData.data)
};

export async function momberFiltre(e) {
    if (e.target.value != "") {
        paramss.assignee = e.target.value;
    } else {
        delete paramss.assignee;
    }
    let filterM = await apiData(paramss);
    console.log(filterM);
    resolve(filterM.data)
};
export function newCartModified() {
    document.querySelector(".cart-form").classList.remove("hide")
    document.querySelector(".les-taches").classList.add("hide")
    let h2 = document.querySelector(".h2")
    h2.innerHTML = ""
    h2.innerHTML = "Modifier votre cart "
    document.querySelector(".submit-card").classList.add("hide")
    document.querySelector(".submit-modifie").classList.remove("hide")
    document.querySelector(".datee").classList.add("hide")


}
export async function getcart(event) {
    newCartModified()
    let tragetId = event.target.dataset.id
    // console.log(tragetId);
    let { data } = await cardGet(tragetId)
    // console.log(data);
    document.querySelector("[name=title]").value = data.title
    document.querySelector("[name=description]").value = data.description
    document.querySelector(".stqtus").value = data.status
    document.querySelector(".creation-cart [name=priority]").value = data.priority
    document.querySelector("[name=assignee]").value = data.assignee
    document.querySelector("[name=inputid]").value = data.id
    // console.log(document.querySelector("[name=inputid]").value);

}
export async function submitLaModification(e) {
    e.preventDefault()
    let formInputs = document.querySelector(".creation-cart")
    let formModifier = new FormData(formInputs)
    let objectForm = Object.fromEntries(formModifier)
    // console.log(objectForm);
    let idform = objectForm.inputid
    // console.log(idform)
    // console.log(cartChange(idform,objectForm));

    await cartChange(idform, objectForm);

    let response = await apiData(paramss);

    resolve(response.data);
    //  reseting(formInputs)
    returnFunction()
}
export function selectOjectKeys(event) {
    if (event.target.classList.contains("validationCustom04")) {
        selectedCard.id = event.target.dataset.id;
        selectedCard.status = event.target.value;
    }
   
}
export async function changePositon() {
    if (!selectedCard.id) {
        return;
    }
    try {
        await cardStatusChange(selectedCard.id, selectedCard.status);
        let response = await apiData(paramss);
        resolve(response.data);
        selectedCard = {};
    } catch (error) {
        rejected(error)
        console.error(error)
    }
}
export function optionButton(e)  {
    if (e.target.classList.contains("modifier")) {
        getcart(e);
    }
     if (e.target.classList.contains("supresion")) {
        selectedCard.id = e.target.dataset.id;
        console.log(e.target.dataset.id);
        suprimerAfficher()
    }
}
export async function suprimerAfficher() {
    if (!selectedCard.id) {
        return;
    }
    try {
        await cardSupression(selectedCard.id );
        let response = await apiData(paramss);
        resolve(response.data);
        selectedCard = {};
    } catch (error) {
        rejected(error)
        console.error(error)
    }
}
