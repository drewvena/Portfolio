import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
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
        return '';
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
    </div>
  );
}

export default App;
