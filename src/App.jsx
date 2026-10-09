import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Clipe from './components/Clipe.jsx'
import Predio from './components/Predio.jsx'
import Looks from './components/Looks.jsx'
import Cartaz from './components/Cartaz.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="pagina">
      <Header />
      <main>
        <Hero />
        <Clipe />
        <Predio />
        <Looks />
        <Cartaz />
      </main>
      <Footer />
    </div>
  )
}
