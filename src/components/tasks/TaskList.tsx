import React, { useEffect, useState } from 'react'
import taskService from '../../services/taskService'
import { Task } from '../../types'
import TaskCard from './TaskCard'

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])

  const load = async () => {
    try {
      const res = await taskService.listTasks({ page: 1, limit: 20 })
      setTasks(res.data.tasks)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} />
      ))}
    </div>
  )
}
