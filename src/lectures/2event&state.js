import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="yellow" home="Home"/>
      <div className="container">
      <TextForm heading="Fill it fast"/>
      </div>
      
    </>
     
  );
}

export default App;
