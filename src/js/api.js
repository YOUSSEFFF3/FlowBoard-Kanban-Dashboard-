// ← les requêtes Axios

export async function apiData(params) {
  let url = 'https://flowboard-api-virid.vercel.app/cards/?'
  return await axios.get(url, {
    headers: {
      'X-Workspace': 'public'
    },
    params: params,
    timeout: 5000 
  })

}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

export async function mombers() {
  return await axios.get('https://flowboard-api-virid.vercel.app/members', {
    headers: {
      'X-Workspace': 'public'
    },
    timeout: 5000 
  });

}
