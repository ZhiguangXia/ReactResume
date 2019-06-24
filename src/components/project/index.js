import React from 'react';
import { Typography, Divider, Icon, Tag} from 'antd';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const Project = props => {
  const projectData = props.projectData;
  const color = ['cyan','blue','geekblue','purple','magenta','red','volcano','orange','gold','lime','green'];
 
  return (
    <div className="Project">
       <Divider orientation="left"><Title level={3} className="Project-title"><Icon type="deployment-unit" /> {projectData.title}</Title></Divider>
      {projectData.list.map((item, index) => (
          <Paragraph key={index}>
            <div>
              <Text className="Project-name">{item.name} </Text> 
              <Text>
                <a href={item.url} target="_blank" rel="noopener noreferrer"><Icon type="github" style={{ fontSize: '18px'}}/></a>
              </Text> 
              <Text className="Project-year" type="secondary">{item.year}</Text>
            </div>
            <div>
              <Text>技术栈： </Text>
              <Text>{item.technology.map((tab, index) => (
                <Tag color={color[index]}>{tab}</Tag>
              ))}</Text>
            </div>
            <ul>
              {item.desctiption.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </Paragraph>
      ))}
    </div>
  );
}

export default Project;
