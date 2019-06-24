import React from 'react';
import { Row, Col } from 'antd';
import Profile from '@components/profile';
import Education from '@components/education';
import Award from '@components/award';
import Paper from '@components/paper';
import Project from '@components/project';
import Work from '@components/work';
import '@/App.css';

const App = props => {
  const profileData = props.data.basics;
  const educationData = props.data.education;
  const awardData = props.data.award;
  const paperData = props.data.paper;
  const projectData = props.data.project;
  const workData = props.data.work;
  return (
    <div className="App">
      <Row type="flex" justify="center" align="top">
      <Col xs={24} sm={24} lg={8}>
        <Profile profileData={profileData} />
      </Col>
      <Col xs={24} sm={24} lg={16}>
        <div  className={'App-right'}>
          <Education educationData={educationData} />
          <Work workData={workData} />
          <Project projectData={projectData} />
          <Paper paperData={paperData} />
          <Award awardData={awardData} />
        </div>
      </Col>
    </Row>

      
    </div>
  );
}

export default App;
