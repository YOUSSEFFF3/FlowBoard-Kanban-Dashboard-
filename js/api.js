export let donne = []

export function apiData(params, affichage) {
    let url = 'https://flowboard-api-virid.vercel.app/cards/?' + params.toString();
    let errorContainer = document.querySelector(".error-container");
    let errorMessage = document.querySelector(".error-message");
    fetch(url, {
        headers: {
            'X-Workspace': 'public'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur : " + response.status);
        }
        return response.json();
    })
    .then(dataa => {
        donne = dataa;
        affichage(donne);
        errorContainer.classList.add("hide");
         document.querySelector(".form-search").classList.remove("hide")
         document.querySelector(".les-taches").classList.remove("hide")
    })
    .catch(error => {
        errorContainer.classList.remove("hide");
        document.querySelector(".form-search").classList.add("hide")
         document.querySelector(".les-taches").classList.add("hide")
        errorMessage.textContent =
            "Impossible de charger les tâches. " + error.message;
        console.log(error);
    });
}


export let mombbers = []
export function mombers(affichMobmbers) {
  fetch('https://flowboard-api-virid.vercel.app/members', {
    headers: {
      'X-Workspace': 'public'
    }
  })
    .then(response => response.json())
    .then(dataa => {
      mombbers = dataa
      affichMobmbers(mombbers)

    })
}
