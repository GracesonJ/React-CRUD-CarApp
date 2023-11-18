import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landingpage from './Pages/Landingpage';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
