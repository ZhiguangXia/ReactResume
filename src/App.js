import React from 'react';
import { Row, Col } from 'antd';
import Profile from '@components/profile';
import Education from '@components/education';
import '@/App.css';

const App = props => {
  const profileData = props.data.basics;
  const educationData = props.data.education;
  return (
    <div className="App">
      <Row type="flex" justify="center" align="top">
      <Col xs={24} sm={24} lg={8}>
        <Profile profileData={profileData} />
      </Col>
      <Col xs={24} sm={24} lg={16}>
        <div  className={'App-right'}>
          <Education educationData={educationData} />
        </div>
      </Col>
    </Row>

      
    </div>
  );
}

export default App;
