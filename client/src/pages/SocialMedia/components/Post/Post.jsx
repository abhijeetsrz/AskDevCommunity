import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { friendAdd, friendRemove } from '../../../../actions/users'
import { setCurrentUser } from '../../../../actions/currentUser'



const Post = ({ data }) => {

  const dispatch = useDispatch();

    useEffect(() =>{
      
      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))

  },[dispatch])

  const User = useSelector((state) => (state.currentUserReducer))

  const id = User.result._id;
  const userId ="" // user if of person of that post

  const [friend, setFriend] = useState(false);

  const [ liked, setLiked ] = useState(data.likes.includes(User.result._id))

  const handleAddFriend = () =>{

    
    if(friend===false)
    {
      dispatch(friendAdd(id, userId));
      
    }else{
       dispatch(friendRemove(id, userId));

    }
    setFriend(!friend);
  }

  return (
    <div className="Post">
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image: ""} alt=''/>


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt=''/>
            <img src={Comment} alt=''/>
            <img src={Share} alt=''/>
            <button className='friend-button' onClick={handleAddFriend} >{friend===true?"Remove friend": "Add friend"}</button>
        </div>

        <span>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>

    </div>
  )
}

export default Post