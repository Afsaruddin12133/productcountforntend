import { Route, Routes } from 'react-router-dom';
import About from '../src/component/About/About';
import Home from '../src/component/Home/Home';
import Product from '../src/component/Product/Product';
import Registation from '../src/component/Registation/Registation';
import Singin from '../src/component/Singin/Singin';
import Footer from '../src/sharedcomponent/Footer/Footer';
import Nav from '../src/sharedcomponent/Navigation/Nav';
import Notfound from '../src/sharedcomponent/Notfound/Notfound';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/singin" element={<Singin/>} />
      <Route path="/registation" element={<Registation/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/*" element={<Notfound/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
