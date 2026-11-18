// ← les requêtes Axios
import { rejected,resolve, selectedCard,paramss } from "./ui.js";
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
export async function cardGet(id) {
  return await axios.get('https://flowboard-api-virid.vercel.app/cards/' + id, {
    headers: {
      'X-Workspace': 'public'
    },
    timeout: 5000
  });
}
export async function cartChange(id, data) {
  const options = {
    method: 'PUT',
    url: `https://flowboard-api-virid.vercel.app/cards/${id}`,
    headers: {
      'X-Workspace': 'public',
      'Content-Type': 'application/json'
    },
    params: {
      password: "1234"
    },
    data: data
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function cardStatusChange(id, status) {
    try {
        const response = await axios.patch(
            `https://flowboard-api-virid.vercel.app/cards/${id}?password=1234`,
            { status },
            {
                headers: {
                    'X-Workspace': 'public',
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
