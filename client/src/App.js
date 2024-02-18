import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
     <Router>
       <Routes>
       <Route path="/" element={<Home />} />
        
        


        
        </Routes> 
     </Router>

    
    );
}

export default App;
