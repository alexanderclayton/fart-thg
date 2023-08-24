//import//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Header } from "./components/Header"
import { About } from "./pages/About"
import { WhyTHG } from "./pages/WhyTHG"
import { Gallery } from "./pages/Gallery"
import { Contact } from "./pages/Contact"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whythg" element={<WhyTHG />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
