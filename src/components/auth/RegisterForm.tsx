import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../common/Input'
import Button from '../common/Button'
import authService from '../../services/authService'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    setError(null)
    setLoading(true)
    try {
      const payload = { email, password, name }
      console.debug('Register payload:', payload)
      const res = await authService.register(payload)
      setMessage(res?.data?.message || 'Usuario creado con éxito. Por favor inicia sesión.')
      setTimeout(() => navigate('/login'), 1200)
    } catch (err: any) {
      console.error('Register error:', err)
      const resp = err?.response
      if (resp) {
        // Show detailed error for debugging (422 validation may return details)
        console.error('Register response data:', resp.data)
        if (resp.status === 422) {
          // try to extract validation messages
          const details = resp.data?.errors || resp.data || resp.data?.detail || resp.data?.message
          setError(`Validation failed (422): ${JSON.stringify(details)}`)
        } else {
          setError(JSON.stringify(resp.data))
        }
      } else {
        setError(err.message || 'Error al registrar')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-2xl mb-4">Registro</h2>
      {message && <div className="text-green-600 mb-2">{message}</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
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
      <Button type="submit">{loading ? 'Registrando...' : 'Registrar'}</Button>
    </form>
  )
}
