import './Foto.css'

// Mostra a imagem ou, sem src, um bloco liso no lugar.
export default function Foto({ src, alt, className = '', fita = false }) {
  return (
    <figure className={`foto ${fita ? 'foto--fita' : ''} ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="foto-vazia" role="img" aria-label={alt} />
      )}
    </figure>
  )
}
