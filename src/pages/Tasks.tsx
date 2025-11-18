import React from 'react'
import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'

export default function Tasks() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Tareas</h1>
      </header>

      <main className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <TaskForm />
        </div>
        <div className="col-span-2">
          <TaskList />
        </div>
      </main>
    </div>
  )
}
