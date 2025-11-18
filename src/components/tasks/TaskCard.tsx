import React from 'react'
import { Task } from '../../types'

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="p-3 border rounded">
      <div className="font-semibold">{task.title}</div>
      <div className="text-sm text-gray-600">{task.description}</div>
      <div className="text-xs mt-2">{task.status} • {task.priority}</div>
    </div>
  )
}
