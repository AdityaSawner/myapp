import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode applied","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode applied","success")
    }
  }

  return (
    <>
      <Navbar title="yellow" mode={mode} toggleMode={toggleMode} home="Home"/>
      <Alert alert={alert}/>
      <div className="container my-10">
      <TextForm heading="Fill it fast"/>
      </div>
      
    </>
     
  );
}

export default App;
