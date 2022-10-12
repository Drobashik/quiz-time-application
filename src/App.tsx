import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/features/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
