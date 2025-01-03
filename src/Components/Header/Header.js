import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import './Header.css';


function Header() {
    const location = useLocation();
    const selectedSection = location.pathname;

 
    return (
        <header className="header">
            <div className="title">Section SN<br />Le Bac Pro SN à l'EME</div>
            <nav className="menu">
                <Link to="/" className={selectedSection === 'Accueil' ? 'active' : ''}>Accueil</Link>
                <Link to="/pfmp" className={selectedSection === 'PFMP' ? 'active' : ''}>PFMP</Link>
                <Link to="/savoirs" className={selectedSection === 'Savoirs' ? 'active' : ''}>Savoirs</Link>
                <Link to="/ared" className={selectedSection === 'ARED' ? 'active' : ''}>ARED</Link>
                <Link to="/risc" className={selectedSection === 'RISC' ? 'active' : ''}>RISC</Link>
                <Link to="/ssiht" className={selectedSection === 'SSIHT' ? 'active' : ''}>SSIHT</Link>
                <Link to="/systemes" className={selectedSection === 'Les systèmes' ? 'active' : ''}>Les systèmes</Link>
                <Link to="/blog" className={selectedSection === 'Blog' ? 'active' : ''}>Blog</Link>
            </nav>
        </header>
    );
}

export default Header;
