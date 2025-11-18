import React from 'react'

export default function Modal({ open, onClose, children }: any) {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-full max-w-xl">
        <div className="flex justify-end">
          <button onClick={onClose} className="px-2">Cerrar</button>
        </div>
        {children}
      </div>
    </div>
  )
}
