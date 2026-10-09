import { predio } from '../content.js'
import Foto from './Foto.jsx'
import './Predio.css'

export default function Predio() {
  return (
    <section id="predio" className="secao predio">
      <div className="predio-inner">
        <Foto className="predio-foto" fita {...predio.foto} />

        <div className="predio-texto">
          <h2 className="titulo-secao">
            Museu
            <br />
            Oscar Niemeyer
          </h2>
          <dl className="ficha">
            {predio.ficha.map(([campo, valor]) => (
              <div key={campo} className="ficha-linha">
                <dt>{campo}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
