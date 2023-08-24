import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Posts.css'
// import { PostsData } from '../../Data/PostsData'
import { getTimelinePosts } from '../../../../actions/postAction'
import Post from '../Post/Post'

const Posts = () => {

  const dispatch = useDispatch()
  const {posts, loading} = useSelector((state) =>state.postReducer)

  useEffect(()=>{
     dispatch(getTimelinePosts())
  },[])

  return (
    <div className="Posts">
        {loading? "Fetching Posts..." :
            posts.map((post, id) => {
                return <Post data={post} id={id}/>
            })
        }
    </div>
  )
}

export default Posts