import React, { Container } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LayoutDefault } from './layouts/LayoutDefault';
import { HomePage } from './views/HomePage'

// import RouterWrapper from './utils/RouterWrapper'

function App() {
  return (
    <LayoutDefault />
  );
}



export default App;
