import React from 'react'
import ProjectList from '../components/projects/ProjectList'
import ProjectForm from '../components/projects/ProjectForm'

export default function Projects() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Proyectos</h1>
      </header>

      <main className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <ProjectForm />
        </div>
        <div className="col-span-2">
          <ProjectList />
        </div>
      </main>
    </div>
  )
}
