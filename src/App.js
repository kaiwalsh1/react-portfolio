import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import NotFound from './components/notFound/NotFound'
import Footer from './components/footer/Footer'
import './app.scss'
import { useState } from 'react'

export const App = () => {
  const [currentPage, setCurrentPage] = useState('Portfolio');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About/>
    } 
    if (currentPage === 'Portfolio') {
      return <Portfolio/>
    }
    if (currentPage === 'Contact') {
      return <Contact/>
    }
    return <NotFound/>
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
            <Footer/>
      <div className="sections">
        {renderPage()}
      </div>

    </div>
  );
};

export default App;
