import { rodape } from '../content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {rodape.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </footer>
  )
}
