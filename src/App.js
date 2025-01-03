import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Accueil from './Components/Accueil/Accueil';
import Blog from './Components/Blog/Blog';
 
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/pfmp" element={<Accueil />} />
                <Route path="/blog" element={<Blog />} />
                {/* Add routes for other sections as needed */}
            </Routes>
        </Router>
    );
}

export default App;
