import React from 'react';
import { Avatar, Typography, Divider, Icon, Popover} from 'antd';
import './index.css';

const { Title, Text, Paragraph } = Typography;

const Profile = props => {
  const profileData = props.profileData;
  // wechat 内容
  const wechat = (
    <div className="Profile-img">
      <Avatar size={200} src={profileData.wechat} icon="user"/>
    </div>
  );
  // 自我介绍
  const introduce = (
    <Paragraph>
          本人在校成绩优异，性格乐观开朗，工作认真负责，长期担任干部。
          有<Text mark>四年前端开发经验</Text>，自我驱动力强，热爱尝试新事物。
          在校期间从事可视分析相关研究，对web的技术发展趋势及前端工程化解决方案有浓厚的兴趣。
          <Text mark>寻找Web前端/可视化工程师岗位</Text>。
    </Paragraph>
  )

  return (
    <div className="Profile">
      <div className="Profile-img">
          <Avatar size={200} src={profileData.avatar} icon="user"/>
      </div>
        <Title level={2} className="Profile-name">{profileData.name}</Title>
        <Title level={4} className="Profile-position">{profileData.position}</Title>
        <Divider />
        <Text strong className="Profile-phone"><Icon type="phone" theme="twoTone"/> {profileData.phone}</Text>
        <Text strong ><Icon type="mail" theme="twoTone" /> {profileData.email}</Text>
        <Divider />
        <Paragraph className="Profile-link">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer"><Icon type="github" theme="filled" className="Profile-link-icon"/></a>
            <Popover content={wechat} title="扫码联系我" trigger="hover">
              <Icon type="wechat" theme="filled" className="Profile-link-icon"/>
            </Popover>
            <a href={profileData.zcool} target="_blank" rel="noopener noreferrer"><Icon type="slack-circle" theme="filled" className="Profile-link-icon"/></a>
        </Paragraph>
        <Divider />
        {introduce}
    </div>
  );
}

export default Profile;