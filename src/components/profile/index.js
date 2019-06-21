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
            <a href={profileData.github} target="_blank"><Icon type="github" theme="filled" style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)' }}/></a>
            <Popover content={wechat} title="扫码联系我" trigger="hover">
              <a href="javascript:void(0);"><Icon type="wechat" theme="filled" style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)' }}/></a>
            </Popover>
            <a href={profileData.zcool} target="_blank"><Icon type="slack-circle" theme="filled" style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.85)' }}/></a>
        </Paragraph>
        <Divider />
    </div>
  );
}

export default Profile;