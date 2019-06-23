import React from 'react';
import { Typography, Divider, Icon} from 'antd';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const Award = props => {
  const awardData = props.awardData;
  
  return (
    <div className="Award">
       <Divider orientation="left"><Title level={3} className="Award-title"><Icon type="trophy" /> {awardData.title}</Title></Divider>
       <Paragraph>
       {awardData.list.map((item, index) => (
          <div key={index}>
            <Text strong>{item.level}， </Text> 
            <Text>{item.name} </Text> 
            <Text className="Award-year" type="secondary">{item.year}</Text>
          </div>
    ))}
       </Paragraph>   
    </div>
  );
}

export default Award;