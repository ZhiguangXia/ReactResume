import React from 'react';
import logo from './logo.svg';
import { Button }  from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          测试中文字体
        </p>
        <div>
          <Button type="primary">Button</Button>
        </div>

      </header>
    </div>
  );
}

export default App;
