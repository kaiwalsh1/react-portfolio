// import { 
//   Project,
//   Footer
//  } from './components'
import Header from './components/header/Header'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'
import './app.scss'

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <div className="sections">
      <About/>
      <Portfolio/>
      <Contact/>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default App;
