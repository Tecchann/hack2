import api from './api'
import { User } from '../types'

export const login = (email: string, password: string) => api.post('/auth/login', { email, password })
export const register = (payload: { email: string; password: string; name: string }) => api.post('/auth/register', payload)
export const getProfile = () => api.get<User>('/auth/profile')

export default { login, register, getProfile }
