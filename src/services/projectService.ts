import api from './api'
import { Project } from '../types'

export const listProjects = (page = 1, limit = 10, search = '') =>
  api.get<{ projects: Project[]; totalPages: number; currentPage: number }>(`/projects?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`)

export const getProject = (id: string) => api.get<Project>(`/projects/${id}`)
export const createProject = (payload: Partial<Project>) => api.post('/projects', payload)
export const updateProject = (id: string, payload: Partial<Project>) => api.put(`/projects/${id}`, payload)
export const deleteProject = (id: string) => api.delete(`/projects/${id}`)

export default { listProjects, getProject, createProject, updateProject, deleteProject }
