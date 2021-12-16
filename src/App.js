import './App.css';
import { Routes, Route } from "react-router-dom";
import TopBar from './components/Navbar';
import Homepage from './pages/Homepage';
import Playing from './pages/Playing';
import Programming from './pages/Programming';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Personnel from './pages/Personnel';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <TopBar />
        <Routes>
          <Route path='/~hawkinma/build/' element={<Homepage />} />
          <Route path='/~hawkinma/build/playing' element={<Playing />} />
          <Route path='/~hawkinma/build/programming' element={<Programming />} />
          <Route path='/~hawkinma/build/publications' element={<Publications />} />
          <Route path='/~hawkinma/build/personnel' element={<Personnel />} />
          <Route path='/~hawkinma/build/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
