import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Services from './component/Services';
import Contact from './component/Contact';
import Network from './component/Network';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Network/>  
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
