import { looks } from '../content.js'
import Foto from './Foto.jsx'
import './Looks.css'

export default function Looks() {
  return (
    <section id="looks" className="secao looks">
      <div className="looks-inner">
        <h2 className="titulo-secao">
          3 looks <span className="looks-epoca">anos 60–70</span>
        </h2>

        <div className="varal">
          <svg className="varal-fio" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 10 Q 500 90 1000 10" />
          </svg>
          <ul className="varal-pecas">
            {looks.map((look) => (
              <li key={look.foto.alt} className="peca">
                <span className="prendedor" aria-hidden="true" />
                <Foto className="peca-foto" {...look.foto} />
                <p className="peca-legenda">
                  <b>{look.nome}</b>
                  <span>{look.nota}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
