import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Spread from './components/Spread';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/spread/:id" element={<Spread />} />
      </Routes>
    </Router>
  );
}

export default App;