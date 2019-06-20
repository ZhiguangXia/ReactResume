import React from 'react';
import './index.css';

function Profile() {
    const data={
        imgUrl: '../../static/profile.jpg',
    }
  return (
    <div className="Profile">
      <div className="Profile-img">
          <img src={data.imgUrl} alt="我的头像" width="200" height="200" />
      </div>
    </div>
  );
}

export default Profile;