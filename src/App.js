import React from 'react';
import './app.css'
import Navbar from './Componetns/Navbar/Navbar';
import Home from './Componetns/Home/Home';
import Footer from './Componetns/Footer/Footer';
import Main from './Componetns/Main/Main';

const App = () => {
    return (
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        
        <main>
          <Home />
          <Main />
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
  

export default App;