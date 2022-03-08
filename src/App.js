import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Routers
import Routers from './Routers/RoutersPublic'

function App() {
  return (
    <Router>
      {
        <Routers/>
      }
    </Router>
  );
}

export default App;