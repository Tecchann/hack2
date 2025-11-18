import api from './api'
import { Task } from '../types'

export const listTasks = (params = {}) => api.get<{ tasks: Task[]; totalPages?: number }>('/tasks', { params })
export const getTask = (id: string) => api.get<Task>(`/tasks/${id}`)
export const createTask = (payload: Partial<Task>) => api.post('/tasks', payload)
export const updateTask = (id: string, payload: Partial<Task>) => api.put(`/tasks/${id}`, payload)
export const deleteTask = (id: string) => api.delete(`/tasks/${id}`)
export const patchTaskStatus = (id: string, status: Task['status']) => api.patch(`/tasks/${id}/status`, { status })

export default { listTasks, getTask, createTask, updateTask, deleteTask, patchTaskStatus }
