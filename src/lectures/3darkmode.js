import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="yellow" home="Home"/>
      <div className="container">
      <About/>
      </div>
      
    </>
     
  );
}

export default App;
