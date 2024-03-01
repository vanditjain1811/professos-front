
import './App.css';
import Banner from './components/Banner';
import Clientsays from './components/Clientsays';
import Counter from './components/Counter';
import Footer from './components/Footer';
import GravityEffect from './components/Gravity';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Team from './components/Team';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Main/>
    <Counter/>
    <Banner/>
    <GravityEffect/>
    <Clientsays/>
    <Team/>
    <Footer/>
    </div>
  );
}

export default App;
