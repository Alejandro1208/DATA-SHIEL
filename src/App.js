import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './componentes/menu/Menu';
import Footer from './componentes/footer/Footer';
import Social from './componentes/social/SocialButtons';
import Home from './componentes/home/Home';
import Blog from './views/blog/Blog';
import Contacto from './views/contacto/Contactenos';
import Paquetes from './views/paquetes/Paquetes';
import Servicios from './views/servicios/Servicios';

function App() {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/servicios" element={<Servicios />}></Route>
                    <Route path="/paquetes" element={<Paquetes />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                </Routes>
                <Footer />
                <Social />
            </Router>
        </div>
    );
}

export default App;
