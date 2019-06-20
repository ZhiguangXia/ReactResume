import React from 'react';
import { Avatar } from 'antd';
import './index.css';

const Profile = props => {
  const profileData = props.profileData;

  return (
    <div className="Profile">
      <div className="Profile-img">
          <Avatar size={200} src={profileData.imgUrl} icon="user"/>
      </div>
      <h1>{profileData.name}</h1>
    </div>
  );
}

export default Profile;