import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import "./css/styles.css"
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
function App() {
  return (
    <div className="App"  id="page-top">
       <Nav/>
       <Header/>
       <Portfolio/>
       <About/>
       <Footer/>
       <Copyright/>
    </div>
  );
}

export default App;
