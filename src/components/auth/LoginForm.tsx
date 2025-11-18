import React, { useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error de login')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 className="text-2xl mb-4">Iniciar sesión</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <label className="block mb-2">
        <div className="text-sm">Email</div>
        <Input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
      </label>
      <label className="block mb-4">
        <div className="text-sm">Contraseña</div>
        <Input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
      </label>
      <Button type="submit">{loading ? 'Entrando...' : 'Entrar'}</Button>
    </form>
  )
}

