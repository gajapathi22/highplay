import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <img src='./logo.svg'/>
    </div>
  );
}

export default App;
