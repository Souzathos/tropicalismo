import './Carimbo.css'

export default function Carimbo({ linhas, className = '' }) {
  return (
    <div className={`carimbo ${className}`} aria-hidden="true">
      {linhas.map((l) => (
        <span key={l}>{l}</span>
      ))}
    </div>
  )
}
