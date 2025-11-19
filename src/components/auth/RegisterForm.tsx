import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import authService from '../../services/authService'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    try {
      await authService.register({ email, password, name })
      setMessage('Usuario creado con éxito. Por favor inicia sesión.')
    } catch (err: any) {
      setMessage(err?.response?.data?.message || 'Error al registrar')
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-2xl mb-4">Registro</h2>
      {message && <div className="text-green-600 mb-2">{message}</div>}
      <label className="block mb-2">
        <div className="text-sm">Nombre</div>
        <Input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      </label>
      <label className="block mb-2">
        <div className="text-sm">Email</div>
        <Input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      </label>
      <label className="block mb-4">
        <div className="text-sm">Contraseña</div>
        <Input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      </label>
      <Button type="submit">Registrar</Button>
    </form>
  )
}
