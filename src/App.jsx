import { BrowserRouter } from "react-router-dom"
import {Navbar, About, Contact, Experience, Hero, Works, StarsCanvas, Tech, Feedbacks} from "./components"

//add a name writer aniomation that chnages the name automatically

const App =()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar/>
        <Hero name="Prasenjeet"/>
      </div>
      <About/>
      {/* experience section */}
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
