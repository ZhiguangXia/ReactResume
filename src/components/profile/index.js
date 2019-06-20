import React from 'react';
import { Avatar } from 'antd';
import './index.css';

function Profile() {
    const data={
        imgUrl: './profile.jpg',
    }
  return (
    <div className="Profile">
      <div className="Profile-img">
          <Avatar size={200} src={data.imgUrl} icon="user"/>
      </div>
    </div>
  );
}

export default Profile;