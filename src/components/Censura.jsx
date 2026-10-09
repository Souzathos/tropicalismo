import { useState } from 'react'
import './Censura.css'

// Verso coberto por uma tarja preta, que sai com hover, foco ou toque.
export default function Censura({ children, className = '' }) {
  const [aberto, setAberto] = useState(false)

  return (
    <button
      type="button"
      className={`censura ${aberto ? 'is-aberto' : ''} ${className}`}
      aria-pressed={aberto}
      onClick={() => setAberto((v) => !v)}
    >
      <span className="censura-texto">“{children}”</span>
      <span className="censura-tarja" aria-hidden="true">
        vetado
      </span>
    </button>
  )
}
