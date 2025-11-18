import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="mt-1 p-2 border rounded w-full" {...props} />
}
