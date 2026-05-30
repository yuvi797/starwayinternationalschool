import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import KeyInfo from './components/KeyInfo'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Features />
        <KeyInfo />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App