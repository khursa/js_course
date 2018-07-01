import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
      </div>
    );
  }
}

export default App;