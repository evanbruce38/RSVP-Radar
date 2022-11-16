import React, {useState } from 'react';
import './App.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Contact from './pages/Contact';


function App() {

  const [menu] = useState(['Home', 'Search', 'Saved', 'Contact']);
  const [currentPage, setCurrentPage] = useState(menu[0])

  return (
    <div>
      <div>
        <Header
          menu={menu}
          currentTitle={currentPage}
          setCurrentTitle={setCurrentPage}
          ></Header>
      </div>
      {currentPage === 'Home' ? (
        <>
          <section className="hero">
            <div>
              <h2>RSVP Radar</h2>
            </div>
          </section>
        </>
      ):''}
      {currentPage !== 'Home' ? (
        <>
          <section className="hero hero-mini">
          </section>
        </>
      ):''}
      <section className="main-section">
        {currentPage === 'Home' ? (
          <>
            <Home></Home>
          </>
        ):''}
        {currentPage === 'Search' ? (
          <>
            <Search></Search>
          </>
        ):''}
        {currentPage === 'Saved' ? (
          <>
            <Saved></Saved>
          </>
        ):''}
        {currentPage === 'Contact' ? (
          <>
            <Contact></Contact>
          </>
        ):''}
      </section>
      <>
        <Footer></Footer>
      </>
    </div>

  );
}

export default App;