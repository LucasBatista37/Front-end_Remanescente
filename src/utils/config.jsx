export const api = "https://front-end-remanescente.vercel.app/api";
export const uploads = "https://front-end-remanescente.vercel.app/uploads" ;

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

//conexao feita

  if (image) {
    config = {
      method: method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method: method,
      headers: {},
    };
  } else {
    config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};