import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About"
import ErrorPage from "./components/Errorpage";

import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
