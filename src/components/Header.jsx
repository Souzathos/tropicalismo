import './Header.css'

const links = [
  ['#clipe', 'Clipe'],
  ['#predio', 'O prédio'],
  ['#looks', 'Looks'],
  ['#cartaz', 'Cartaz'],
]

export default function Header() {
  return (
    <header className="header">
      <a href="#topo" className="header-logo" aria-label="Início">
        G5
      </a>
      <nav aria-label="Seções">
        <ul className="header-links">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
