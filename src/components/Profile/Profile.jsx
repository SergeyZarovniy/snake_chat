import React from "react";
import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPost';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts/>
      
    </div>
  );
};

export default Profile;
