import React from 'react';
import Layout from './containers/layout';
import './App.css';

function App() {
  const style = {
    marginBottom: '2rem',
    fontWeight: '500',
    textDecoration: 'underlined'
  };
  return (
    <div className="App">
      <h1 style={style}>Todo-list</h1>
      <Layout />
    </div>
  );
}

export default App;
