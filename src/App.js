// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React,{ useState } from 'react';
 import TextForm from './TextForm';
import About from './About';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,Route,
  }
  from "react-router-dom";


function App() {
  const[mode,setMode] = useState( 'light');
  const[alert,setAlert] = useState("null");
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
     setAlert(null)}
    ,2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor ='grey';
    showAlert("dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("light mode has been enabled", "success");
  }}
  return (
    <>
    <Router> 
   <Navbar Title="Textutils" mode={mode} toggleMode={toggleMode} AboutText="About us"/>
   <Alert alert={alert}/>
   <div className='container my-3'>
    <Routes>
      
      <Route path="/About us" element={<About/>} /> 
      
       <Route path='/'
       element={ <TextForm showAlert={showAlert} heading= "Try TextUtils - WordCounter, CharacterCounter, Remove extra spaces" mode={mode}/>}/>
      
      </Routes>
    
    
</div>
   </Router> 
  
    </>
  );
}

export default App;
