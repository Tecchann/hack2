import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        <LoginForm />
        <div className="text-center mt-4">
          <span className="text-sm">¿No tienes cuenta? </span>
          <Link to="/register" className="text-blue-600 underline">Regístrate</Link>
        </div>
      </div>
    </div>
  )
}
