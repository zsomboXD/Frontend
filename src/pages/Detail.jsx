import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { readPost, deletePost, toggleLikes } from '../utility/crudUtility';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import parse from 'html-react-parser';
import { useConfirm } from 'material-ui-confirm';

 export const Detail = () => {
    const [post,setPost]=useState(null)

    const {user}=useContext(UserContext)
    const params=useParams()
    const confirm=useConfirm()
    const navigate=useNavigate()
    const [txt,setTxt]=useState(null)


    useEffect(()=>{
        readPost(params.id,setPost)
    },[])
 

    const handleDelete=async ()=>{
      try {
          await confirm({
              description:"Ez egy visszavonhatatlan művelet!",
              confirmationText:"Igen",
              cancellationText:"Mégsem",
              title:"Biztosan törölni akarod a posztot?"
          })
          deletePost(params.id)
          delPhoto(post.photo.id)
          navigate('/posts')
      } catch (error) {
          console.log('mégse:',error);
          
      }
      navigate('/posts')
  }


   post && console.log(post);
    
   const handleLikes=()=>{
    if(!user) setTxt("Csak bejelentkezett felhasználók likeolhatnak!")
      else toggleLikes(post.id,user.uid)
   }

  return (
    <div className='page'>
     {post && <>
     <img src={post.photo?.url} alt={post.title} style={{maxWidth:"300px"}}/>
     <div>{parse(post.story || "")}</div>
     </>}
     <button className='btn btn-secondary' onClick={()=>navigate('/posts')}>vissza....</button>
<div>

    <div>
        <button onClick={handleLikes}>👍</button>

    </div>
<span>Likes :{post?.likes?.length || 0}</span>

</div>

     {user && post && (user.uid==post.userId) &&
        <>
     <button onClick={handleDelete}>DELETE</button>
     <button onClick={()=>navigate('/update/'+post.id)}>📖</button>
     </> 
    }

     </div>
  )
}


