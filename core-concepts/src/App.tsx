import React from 'react';
import './App.css';
import TestComponent from './component/Component';
import TestPureComponent from './pure-component/PureComponent';

function App() {
  return (
    <div className="App">
      The component created by function
      <TestComponent />
      <TestPureComponent   />
    </div>
  );
}

export default App;
