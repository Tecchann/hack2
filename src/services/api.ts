import axios from 'axios'

const BASE = 'https://cs2031-2025-2-hackathon-2-backend-production.up.railway.app/v1'

const instance = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

const setToken = (token: string | null) => {
  if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete instance.defaults.headers.common['Authorization']
}

// also export setToken as named export for type-safe imports
export { setToken }

// keep default export as axios instance
export default instance
