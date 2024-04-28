import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="yellow" mode={mode} toggleMode={toggleMode} home="Home"/>
      <div className="container my-10">
      <TextForm heading="Fill it fast"/>
      </div>
      
    </>
     
  );
}

export default App;
