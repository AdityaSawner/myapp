import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode applied", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode applied", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Jeeez" mode={mode} toggleMode={toggleMode} home="Home" />
        <Alert alert={alert} />
        <div className="container my-10">
        
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Fill it fast" />}/>
        </Routes>
      

         
          {/*  <About/>*/}
        </div>
      </Router>
    </>
  );
}

export default App;
