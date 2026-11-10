import {affichage,  } from "./ui.js";
export let donne=[]
export function apiData() {
    
 fetch('https://flowboard-api-virid.vercel.app/cards', {
  headers: {
    'X-Workspace': 'public'
  }
}) 
.then(response=>response.json())
.then(dataa => {
    donne=dataa 
 affichage(donne)
})

}
