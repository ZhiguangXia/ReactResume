import React from 'react';
import { Avatar, Typography, Divider, Icon, Popover, Badge, Statistic } from 'antd';
import './index.css';
const { Title, Paragraph, Text } = Typography;

const Education = props => {
  const educationData = props.educationData;
  
  return (
    <div className="Education">
       <Divider orientation="left"><Title level={3} className="Education-title"><Icon type="deployment-unit" /> 教育背景</Title></Divider>
      {educationData.list.map((item, index) => (
          <Paragraph>
            <div>
              <Text className="Education-school">{item.school}</Text> 
              <Text>{item.field} </Text> 
              <Text underline>{item.degree} </Text> 
              <Text className="Education-year" strong>{item.year}</Text>
            </div>
            <div>
              <Text underline>{item.strong}</Text>
              <Text>{item.desctiption}</Text>
            </div>
      </Paragraph>

      ))

      }
    </div>
  );
}

export default Education;