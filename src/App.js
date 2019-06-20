import React from 'react';
import { Row, Col } from 'antd';
import './App.less';

function App() {
  const DemoBox = props => <p className={'App-box'}>{props.children}</p>;
  return (
    <div className="App">
      <Row type="flex" justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

      
    </div>
  );
}

export default App;
