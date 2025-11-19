import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import projectService from '../../services/projectService'

export default function ProjectForm({ onCreated }: any) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await projectService.createProject({ name, description, status: 'ACTIVE' })
      setName('')
      setDescription('')
      if (onCreated) onCreated()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={submit} className="p-4 bg-white rounded shadow">
      <h3 className="mb-2">Nuevo Proyecto</h3>
      <label className="block mb-2">
        <div className="text-sm">Nombre</div>
        <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      </label>
      <label className="block mb-4">
        <div className="text-sm">Descripción</div>
        <Input value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
      </label>
      <Button type="submit">Crear</Button>
    </form>
  )
}
