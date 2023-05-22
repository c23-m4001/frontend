import axios from 'axios'

const BASE_URL = 'https://money-be.mikroskil.com/'

function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}

function fetchWithToken(url, options = {}) {
  return axios.get(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  })
}

async function login({ email, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/email-login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    const responseJson = await response.json()
    console.log(responseJson)
    return { error: false, data: responseJson.data }
  } catch (error) {
    alert(error.message)
    return { error: true, data: null }
  }
}

async function register({ name, email, password }) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const responseJson = response.json();
    console.log(responseJson);
    return { error: false, data: responseJson.data }
  } catch (error) {
    alert(error.message)
    return { error: true, data: null }
  }
}

async function getUserLogged() {
  try {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    console.log(responseJson);
    return { error: false, data: responseJson.data };
  } catch (error) {
    return { error: true, data: null };
  }
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged
};
