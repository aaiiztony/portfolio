import { BrowserRouter } from "react-router-dom"
import {Navbar, About, Contact, Experience, Hero, Works, StarsCanvas} from "./components"

const App =()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar/>
        <Hero name="Tony"/>
      </div>
      <About/>
        <Experience/>
        <Works/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
