import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { Toastify } from '../components/Toastify';
import { uploadFile } from '../utility/uploadFile';
import { extractUrlAndId } from '../utility/utils';
import { BarLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>
          Felhasználói Fiók Beállítás
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
              Felhasználónév:
            </label>
            <input
              {...register('displayName')}
              placeholder="Felhasználónév"
              type="text"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Avatar:</label>
            <input
              {...register('file', {
                validate: (value) => {
                  if (!value[0]) return true;
                  const acceptedFormats = ['jpg', 'png'];
                  const fileExtension = value[0].name.split('.').pop().toLowerCase();
                  if (!acceptedFormats.includes(fileExtension)) return 'Invalid file format';
                  if (value[0].size > 1 * 1000 * 1024) return 'A maximális fájlméret 1MB';
                  return true;
                },
              })}
              type="file"
              style={{
                display: 'block',
                marginBottom: '5px',
              }}
              onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
            />
            <p className="text-danger" style={{ color: 'red', fontSize: '14px' }}>
              {errors?.file?.message}
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <input
              type="submit"
              value="Mentés"
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
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <BarLoader color="#007bff" />
          </div>
        )}

        {msg && <Toastify {...msg} />}

        {avatar && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img
              src={avatar}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
