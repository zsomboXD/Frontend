import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Home } from './Home';
import { useForm } from 'react-hook-form';
import { BarLoader } from 'react-spinners';
import { Story } from '../components/Story';
import { uploadFile } from '../utility/uploadFile';
import { addPost, readPost, updatePost } from '../utility/crudUtility';
import { CategDropdown } from '../components/CategDropDown';
import { Alerts } from '../components/Alerts';
import { useParams } from 'react-router-dom';
import { CategContext } from '../context/CategContext';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSave } from '@fortawesome/free-solid-svg-icons';

export const AddEditPost = () => {
  const { categories1 } = useContext(CategContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [story, setStory] = useState(null);
  const [selCateg, setSelCateg] = useState(null);
  const [post, setPost] = useState(null);
  
const sideImageLeft = "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=200&h=355&auto=format&fit=crop";
const sideImageRight = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=200&h=355&auto=format&fit=crop";

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    setValue 
  } = useForm();
  
  const params = useParams();

  useEffect(() => {
    if(params?.id) readPost(params.id, setPost);
  }, [params?.id]);

  useEffect(() => {
    if(post) {
      setValue("title", post.title);
      setSelCateg(post.category);
      setStory(post.story);
    }
  }, [post]);

  if(!user) return <Home />;

  const onSubmit = async (data) => {
    setLoading(true);
    if(params.id) {
      try {
        await updatePost(params.id, {...data, category: selCateg, story});
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      let newPostData = {
        ...data,
        story,
        author: user.displayName,
        userId: user.uid,
        category: selCateg,
        likes: []
      };
      
      try {
        const file = data.file[0];
        const { url, id } = await uploadFile(file);
        delete newPostData.file;
        newPostData = {...newPostData, photo: { url, id }};
        await addPost(newPostData);
        setUploaded(true);
        reset();
        setPhoto(null);
        setStory(null);
      } catch (error) {
        console.log(error);      
      } finally {
        setLoading(false);
      }   
    }
  };

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      paddingTop: '80px',
      color: 'white',
      position: 'relative'
    }}>
      <Header />

<div style={{
  position: 'fixed',
  left: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  opacity: 0.8,
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: 1
  }
}}>
  <img 
    src={sideImageRight}  
    alt="Workout"
    className="side-decoration-image left-image"
    style={{
      width: '220px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }} 
  />
</div>

<div style={{
  position: 'fixed',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  opacity: 0.8,
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: 1
  }
}}>
  <img 
    src={sideImageLeft} 
    alt="Fitness" 
    className="side-decoration-image right-image" 
    style={{
      width: '220px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    }} 
  />
</div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#ffffff'
          }}>
            {params.id ? 'Edit Post' : 'Create New Post'}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="no-hover" style={{ marginBottom: '1.5rem' }}>
              <p style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Post Title:
              </p>
              <input
                {...register('title', { required: true })}
                type="text"
                placeholder="Enter title"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              {errors?.title && (
                <p style={{ color: '#ff4444', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                  Title is required
                </p>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <CategDropdown
                categories1={categories1}
                setSelCateg={setSelCateg}
                selCateg={selCateg}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Post Content:
              </p>
              <Story setStory={setStory} uploaded={uploaded} />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '1rem',
                color: '#cccccc'
              }}>
                Upload Image:
              </p>
              <div style={{
                border: '2px dashed #333',
                borderRadius: '6px',
                padding: '1rem',
                textAlign: 'center',
                backgroundColor: '#0d0d0d',
                cursor: 'pointer',
                position: 'relative'
              }}>
                <input
                  {...register('file', {
                    required: !params.id,
                    validate: (value) => {
                      if (!value[0]) return true;
                      const acceptedFormats = ['jpg', 'png'];
                      const fileExtension = value[0].name.split('.').pop().toLowerCase();
                      if (!acceptedFormats.includes(fileExtension)) return 'Invalid file format';
                      if (value[0].size > 1 * 1000 * 1024)
                        return 'Maximum file size is 1MB';
                      return true;
                    },
                  })}
                  type="file"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                  onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
                />
                <FontAwesomeIcon icon={faImage} style={{ fontSize: '2rem', color: '#4CAF50' }} />
                <p style={{ marginTop: '0.5rem' }}>Click to upload image (JPG/PNG, max 1MB)</p>
              </div>
              {errors?.file?.message && (
                <p style={{ color: '#ff4444', marginTop: '0.5rem', fontSize: '0.875rem' }}>
                  {errors.file.message}
                </p>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                type="submit"
                disabled={!selCateg || !story}
                style={{
                  backgroundColor: selCateg && story ? '#4CAF50' : '#555',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <FontAwesomeIcon icon={faSave} />
                {params.id ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </form>

          {loading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <BarLoader color="#4CAF50" width="100%" />
            </div>
          )}

          {uploaded && (
            <div style={{ marginTop: '1.5rem' }}>
              <Alerts txt="Post created successfully!" />
            </div>
          )}

          {photo && (
            <div style={{
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#cccccc' }}>Image Preview</h3>
              <img
                src={photo}
                alt="Preview"
                style={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  borderRadius: '8px',
                  border: '2px solid #333',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};