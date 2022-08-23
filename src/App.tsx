import React from 'react';
import logo from './logo.svg';
import '../src/core/scss';

function App() {
  // const arr1 = [
  //   {name:'abc', id:2},{name:'xyz', id:3}
  // ]

  // const arr2 =arr1.map(i=>i.name)
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:"#FF0000" }}>Attitude Boy</h1>
        <small style={{color:"#FF0000" }}>Placku urf Manzoor Hussain balti from china</small>
        <small style={{color:"#FF0000" }}>
你好</small>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
