import { hero } from '../content.js'
import Carimbo from './Carimbo.jsx'
import Censura from './Censura.jsx'
import Foto from './Foto.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-texto">
        <Carimbo className="hero-carimbo" linhas={['Censurado', 'DCDP · 1970']} />
        <h1 className="hero-titulo">
          <span>Apesar</span>
          <span className="hero-titulo-2">de você</span>
        </h1>
        <p className="hero-sub">{hero.subtitulo}</p>
        <Censura className="hero-verso">{hero.verso}</Censura>
        <a href="#clipe" className="hero-cta">
          ver o clipe ↓
          <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 9 C 40 3, 70 12, 110 6 S 170 4, 198 8" />
          </svg>
        </a>
      </div>

      <div className="hero-arte">
        <div className="recorte recorte--rosa" aria-hidden="true" />
        <div className="recorte recorte--verde" aria-hidden="true" />
        <Foto className="hero-olho" {...hero.foto} />
      </div>
    </section>
  )
}
