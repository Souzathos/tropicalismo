import { cartaz } from '../content.js'
import Foto from './Foto.jsx'
import './Cartaz.css'

export default function Cartaz() {
  return (
    <section id="cartaz" className="secao cartaz">
      <div className="cartaz-inner">
        <Foto className="cartaz-a3" {...cartaz.foto} />

        <div className="cartaz-texto">
          <h2 className="titulo-secao">
            Cartaz
            <br />
            pop art
          </h2>
          <p className="cartaz-grupo">Grupo 5 — feito por:</p>
          <ul className="dymo-lista">
            {cartaz.integrantes.map((nome) => (
              <li key={nome} className="dymo">
                {nome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
