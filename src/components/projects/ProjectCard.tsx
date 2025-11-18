import React from 'react'
import { Project } from '../../types'

export default function ProjectCard({ project, onClick }: { project: Project; onClick?: () => void }) {
  return (
    <div className="p-4 border rounded hover:shadow cursor-pointer" onClick={onClick}>
      <h3 className="font-semibold">{project.name}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>
      <div className="text-xs mt-2">Status: {project.status}</div>
    </div>
  )
}
