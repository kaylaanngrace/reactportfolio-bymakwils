import React from 'react';
import Nav from './components/Navigation/Navigation';
import About from './components/About/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <About></About>

        <Portfolio></Portfolio>

      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
