import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'

import './ProfileCard.css'
import Cover from "../../img/cover.jpg"
import { setCurrentUser } from '../../../../actions/currentUser';


const ProfileCard = () => {
    const ProfilePage = true;
    
    const dispatch = useDispatch();
 
    useEffect(() =>{
      
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))

  },[dispatch])

    const User = useSelector((state) => (state.currentUserReducer));
    console.log("postCard",User)

    return (
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />

          <span className='ProfileAvatar'>
            {User.result.name.charAt(0).toUpperCase()}
          </span>
          
    
        </div>
  
        <div className="ProfileName">
          <span>{User.result.name}</span>
          <span>{User.result.about}</span>
        </div>
  
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>{User.result.friend.length}</span>
              <span>Friends</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>{moment(User.result.joinedOn).year()}</span>
              <span>Year Present</span>
            </div>
  
            {ProfilePage && (
              <>
                <div className="vl"></div>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
        {ProfilePage ? "" : <span>My Profile</span>}
      </div>
    );
  };

export default ProfileCard