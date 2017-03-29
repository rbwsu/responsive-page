import React, { Component } from 'react';
import Header from './modules/Header';
import Section from './modules/Section';
import Footer from './modules/Footer';
import PrimarySection from './modules/PrimarySection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PrimarySection />
        <div className="sectionContainer">
          <Section />
          <Section />
          <Section />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
