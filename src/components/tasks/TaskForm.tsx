import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import taskService from '../../services/taskService'

export default function TaskForm({ onCreated }: any) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [projectId, setProjectId] = useState('')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await taskService.createTask({ title, description, projectId, priority: 'MEDIUM', status: 'TODO' })
      setTitle('')
      setDescription('')
      if (onCreated) onCreated()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={submit} className="p-4 bg-white rounded shadow">
      <h3 className="mb-2">Nueva Tarea</h3>
      <label className="block mb-2">
        <div className="text-sm">Título</div>
        <Input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      </label>
      <label className="block mb-2">
        <div className="text-sm">Descripción</div>
        <Input value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
      </label>
      <label className="block mb-4">
        <div className="text-sm">Project ID (opcional)</div>
        <Input value={projectId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProjectId(e.target.value)} />
      </label>
      <Button type="submit">Crear Tarea</Button>
    </form>
  )
}
