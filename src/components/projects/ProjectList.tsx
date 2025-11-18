import React, { useEffect, useState } from 'react'
import { Project } from '../../types'
import projectService from '../../services/projectService'
import ProjectCard from './ProjectCard'

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])

  const load = async () => {
    try {
      const res = await projectService.listProjects()
      setProjects(res.data.projects)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
