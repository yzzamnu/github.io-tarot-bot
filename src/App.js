import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpreadView from './components/SpreadView';

function App() {
  return (
    <Routes>
      <Route path="/spread/:spreadId" element={<SpreadView />} />
    </Routes>
  );
}

export default App;