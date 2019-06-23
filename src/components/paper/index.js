import React from 'react';
import { Typography, Divider, Icon} from 'antd';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const Paper = props => {
  const paperData = props.paperData;
  
  return (
    <div className="Paper">
       <Divider orientation="left"><Title level={3} className="Paper-title"><Icon type="highlight" /> {paperData.title}</Title></Divider>
       <Paragraph>
       {paperData.list.map((item, index) => (
          <div key={index}>
            <Text>{item.title} </Text> 
            <Text mark>{item.conference}</Text> 
            <Text className="Paper-level" type="secondary">{item.level}</Text>
          </div>
    ))}
       </Paragraph>   
    </div>
  );
}

export default Paper;