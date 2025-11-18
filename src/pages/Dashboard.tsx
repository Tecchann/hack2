import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">TechFlow Dashboard</h1>
        <div>
          <span className="mr-4">{user?.name}</span>
          <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
        </div>
      </header>

      <main>
        <section className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded shadow">Total Tareas: --</div>
          <div className="p-4 bg-white rounded shadow">Completadas: --</div>
          <div className="p-4 bg-white rounded shadow">Pendientes: --</div>
          <div className="p-4 bg-white rounded shadow">Vencidas: --</div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl mb-2">Actividad reciente</h2>
          <div className="p-4 bg-white rounded shadow">--</div>
        </section>
      </main>
    </div>
  )
}
