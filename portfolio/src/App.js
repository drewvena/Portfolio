import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume';
import Footer from './components/Footer'
import './index.css';

function App() {
  const [page, setPage] = useState('About');
  function renderPage() {
    switch(page) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact': 
        return <Contact />;
      case 'Resume':
        return <Resume />;
      case 'About Me':
        return <About />;
        default:      return <About></About>;
    }
  }
  return (
    <div className="mainpage">
      <Nav 
        page={page}
        setPage={setPage}
        renderPage={renderPage}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
