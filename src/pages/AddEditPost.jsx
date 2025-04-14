import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import {Home} from './Home'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BarLoader } from 'react-spinners'
import {Story} from '../components/Story'
import {uploadFile} from '../utility/uploadFile'
import { addPost, readPost, updatePost } from '../utility/crudUtility'
import { CategDropdown } from '../components/CategDropDown'
import { Alerts } from '../components/Alerts'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { CategContext } from '../context/CategContext'
import { Header } from '../components/Header'

export const AddEditPost = () => {

  const {categories1}=useContext(CategContext)
  console.log(useContext(CategContext));

  const {user}=useContext(UserContext)
  const [loading,setLoading]=useState(false)
  const [uploaded,setUploaded]=useState(false)
  const [photo,setPhoto]=useState(null)
  const [story,setStory]=useState(null)
  const [selCateg,setSelCateg]=useState(null)

  const [post,setPost]=useState(null)
  const {register, handleSubmit, formState: { errors },reset,setValue } = useForm();
  const params=useParams()

  useEffect(()=>{
    if(params?.id) readPost(params.id,setPost)
  },[params?.id])

  useEffect(( )=>{
    if(post){
      setValue("title",post.title)
      setSelCateg(post.category)
      setStory(post.story)
    }
  },[post])


  if(!user) return <Home />

  const onSubmit=async (data)=>{
    setLoading(true)
    if(params.id){

      try {
        updatePost(params.id,{...data,category:selCateg,story})
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }else{
      


    let newPostData={
        ...data,
        story,
        author:user.displayName,
        userId:user.uid,
        category:selCateg,
        likes:[]
      }
      
      
    try {
      const file=data.file[0] 
      const {url,id}=await uploadFile(file)
      delete newPostData.file
      newPostData={...newPostData,photo:{url,id}}
      console.log('postData:',newPostData);
      addPost(newPostData)
      setUploaded(true)
      reset()
      setPhoto(null)
      setStory(null)
    } catch (error) {
        console.log(error);      
    }finally{
      setLoading(false)
    }   
  }
  }
  return (
    <div className='page'

      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#f4f6f9',
      padding: '20px',
      paddingTop: '100px',

    }}>
      <Header />

<div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          {params.id ? 'Szerkesztés' : 'Új bejegyzés hozzáadása'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
              A bejegyzés címe:
            </label>
            <input
              {...register('title', { required: true })}
              type="text"
              placeholder="Cím"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
              }}
            />
            <p className="text-danger" style={{ color: 'red', fontSize: '14px' }}>
              {errors?.title && 'A cím megadása kötelező'}
            </p>
          </div>

          <CategDropdown
            categories1={categories1}
            setSelCateg={setSelCateg}
            selCateg={selCateg}
          />

          <Story setStory={setStory} uploaded={uploaded} />

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
              Fotó feltöltése:
            </label>
            <input
              {...register('file', {
                required: !params.id,
                validate: (value) => {
                  if (!value[0]) return true;
                  const acceptedFormats = ['jpg', 'png'];
                  const fileExtension = value[0].name.split('.').pop().toLowerCase();
                  if (!acceptedFormats.includes(fileExtension)) return 'Invalid file format';
                  if (value[0].size > 1 * 1000 * 1024)
                    return 'Az engedélyezett maximális fájlméret 1MB';
                  return true;
                },
              })}
              type="file"
              style={{ display: 'block' }}
              onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
            />
            <p className="text-danger" style={{ color: 'red', fontSize: '14px' }}>
              {errors?.file?.message}
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input
              type="submit"
              value="Mentés"
              disabled={!selCateg || !story}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            />
          </div>
        </form>

        {loading && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <BarLoader color="#007bff" />
          </div>
        )}

        {uploaded && <Alerts txt="Sikeres feltöltés!" />}

        {photo && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
              src={photo}
              alt="Preview"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

