export type User = {
  id: string
  email: string
  name: string
  createdAt?: string
}

export type Project = {
  id: string
  name: string
  description?: string
  status?: 'ACTIVE' | 'COMPLETED' | 'ON_HOLD'
}

export type Task = {
  id: string
  title: string
  description?: string
  projectId?: string
  priority?: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  status?: 'TODO' | 'IN_PROGRESS' | 'COMPLETED'
  dueDate?: string
  assignedTo?: string
}
