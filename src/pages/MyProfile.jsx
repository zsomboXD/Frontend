import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { Toastify } from '../components/Toastify';
import { uploadFile } from '../utility/uploadFile';
import { extractUrlAndId } from '../utility/utils';
import { BarLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera, faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const MyProfile = () => {
  const { user, updateUser, msg } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  useEffect(() => {
    if (user?.photoURL) {
      setAvatar(extractUrlAndId(user.photoURL).url);
    }
  }, [user]);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      displayName: user?.displayName || '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const file = data?.file ? data?.file[0] : null;
      const { url, id } = file ? await uploadFile(file) : {};
      updateUser(data.displayName, url ? `${url}/${id}` : undefined);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80&grayscale")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      paddingTop: '110px'
    }}>
      <Header />
      
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        border: '1px solid #333',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: '#0d0d0d',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative',
          borderBottom: '1px solid #333'
        }}>
          <button 
            onClick={() => navigate(-1)}
            style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.2rem'
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h2 style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <FontAwesomeIcon icon={faUser} />
            Profile Settings
          </h2>
          <p style={{
            opacity: 0.7,
            marginTop: '0.5rem',
            color: '#95a5a6'
          }}>Update your personal information</p>
        </div>

        <div style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {avatar && (
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '4px solid #2c3e50',
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                position: 'relative',
                marginTop: '-75px'
              }}>
                <img
                  src={avatar}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FontAwesomeIcon icon={faUser} />
                Username
              </p>
              <input
                {...register('displayName')}
                placeholder="Enter your username"
                type="text"
                style={{
                  padding: '0.8rem 1rem',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #333',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  outline: 'none',
                  color: 'white'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FontAwesomeIcon icon={faCamera} />
                Profile Picture
              </p>
              <div style={{
                border: '2px dashed #333',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                position: 'relative',
                backgroundColor: '#0d0d0d',
                ':hover': {
                  borderColor: '#2c3e50'
                }
              }}>
                <input
                  {...register('file', {
                    validate: (value) => {
                      if (!value[0]) return true;
                      const acceptedFormats = ['jpg', 'png', 'jpeg', 'webp'];
                      const fileExtension = value[0].name.split('.').pop().toLowerCase();
                      if (!acceptedFormats.includes(fileExtension)) return 'Only JPG, PNG, or WEBP files are allowed';
                      if (value[0].size > 1 * 1000 * 1024) return 'Maximum file size is 1MB';
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
                  onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
                />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <FontAwesomeIcon icon={faCamera} style={{ fontSize: '24px', color: '#2c3e50' }} />
                  <p style={{
                    margin: 0,
                    color: '#95a5a6',
                    fontSize: '0.9rem'
                  }}>Click to upload or drag and drop</p>
                  <p style={{
                    margin: 0,
                    color: '#7f8c8d',
                    fontSize: '0.8rem'
                  }}>JPG, PNG up to 1MB</p>
                </div>
              </div>
              {errors?.file?.message && (
                <p style={{
                  color: '#e74c3c',
                  fontSize: '0.8rem',
                  marginTop: '0.25rem'
                }}>{errors.file.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#2c3e50',
                color: 'white',
                padding: '0.8rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                ':hover': {
                  backgroundColor: '#1a2634'
                }
              }}
            >
              {loading ? (
                <BarLoader color="#ffffff" height={4} width={50} />
              ) : (
                <>
                  <FontAwesomeIcon icon={faSave} />
                  Save Changes
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {msg && <Toastify {...msg} />}
    </div>
  );
};