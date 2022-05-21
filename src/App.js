import React from 'react';
import Nav from './components/Navigation/Navigation';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <About></About>

        <Portfolio></Portfolio>

        <Contact></Contact>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
