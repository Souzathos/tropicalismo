import { clipe, youtubeId } from '../content.js'
import Censura from './Censura.jsx'
import './Clipe.css'

export default function Clipe() {
  return (
    <section id="clipe" className="secao clipe">
      <div className="clipe-inner">
        <h2 className="titulo-secao clipe-titulo">O clipe</h2>

        <div className="tv">
          <div className="tv-tela">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title="Clipe “Apesar de você” — Grupo 5"
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="tv-vazia" role="img" aria-label="Clipe ainda não publicado" />
            )}
          </div>
        </div>

        <div className="clipe-texto">
          <p>{clipe.texto}</p>
          <Censura>{clipe.verso}</Censura>
        </div>
      </div>
    </section>
  )
}
