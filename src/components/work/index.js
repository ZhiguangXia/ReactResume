import React from 'react';
import { Typography, Divider, Icon, Tag} from 'antd';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const Work = props => {
  const workData = props.workData;
  const color = ['cyan','blue','geekblue','purple','magenta','red','volcano','orange','gold','lime','green'];
 
  return (
    <div className="Work">
       <Divider orientation="left"><Title level={3} className="Work-title"><Icon type="rocket" /> {workData.title}</Title></Divider>
      {workData.list.map((item, index) => (
          <Paragraph key={index}>
            <div>
              <Text className="Work-name">{item.company} </Text> 
              <Text underline>{item.department}</Text> 
              <Text className="Work-year" type="secondary">{item.year}</Text>
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

export default Work;
