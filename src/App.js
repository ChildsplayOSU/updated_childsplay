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
            <Route path="/" element={<Homepage />} />
            <Route path='/playing' element={<Playing />} />
            <Route path='/programming' element={<Programming />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/personnel' element={<Personnel />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
