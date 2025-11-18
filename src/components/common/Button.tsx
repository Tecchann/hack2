import React from 'react'

export default function Button({ children, onClick, className = '', type = 'button' }: any) {
  return (
    <button type={type} onClick={onClick} className={`bg-blue-600 text-white px-3 py-1 rounded ${className}`}>
      {children}
    </button>
  )
}
