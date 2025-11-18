import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

type User = { id: string; email: string; name: string } | null

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('tf_token')
    if (stored) {
      setToken(stored)
      api.setToken(stored)
      // fetch profile
      api.get('/auth/profile').then((res) => setUser(res.data)).catch(() => {
        setUser(null)
        setToken(null)
      })
    }
  }, [])

  const login = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password })
    const t = res.data.token
    localStorage.setItem('tf_token', t)
    api.setToken(t)
    setToken(t)
    setUser(res.data.user)
  }

  const logout = () => {
    localStorage.removeItem('tf_token')
    setUser(null)
    setToken(null)
    api.setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
