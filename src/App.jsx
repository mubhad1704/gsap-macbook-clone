
import { ScrollTrigger, SplitText } from 'gsap/all'
import './App.css'
import Heero from './Components/Heero'
import Navbar from './Components/Navbar'
import ProductViewer from './Components/ProductViewer'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

function App() {


  return (
    <>
    <main>
      <Navbar/>
      <Heero/>
      <ProductViewer/>
    </main>
      
    </>
  )
}

export default App
