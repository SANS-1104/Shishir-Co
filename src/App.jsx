import Navbar from "./Navbar"
import IntroPage from "./IntroPage"
import About from "./About"
import Services from "./Services"
import Team from "./Team"
import Commit from "./Commit"
// import GlareCardDemo from "./GlareCardOp"
import BackgroundBoxesDemo from "./BoxEffect"
import Footer from "./Footer"
import { ImOffice } from "react-icons/im"

function App() {

  return (
    <>
      <Navbar />
      <IntroPage />
      <About />
      <Services />
      <Team />
      <Commit />
      {/* <GlareCardDemo /> */}
      {/* <BackgroundBoxesDemo /> */}
      <Footer />
    </>
    
  )
}

export default App
