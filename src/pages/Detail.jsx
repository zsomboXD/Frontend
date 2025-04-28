import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { readPost, deletePost, toggleLikes } from '../utility/crudUtility';
import { UserContext } from '../context/UserContext';
import parse from 'html-react-parser';
import { useConfirm } from 'material-ui-confirm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTrash, faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Toastify } from '../components/Toastify';
import { Header } from '../components/Header';

export const Detail = () => {
    const [post, setPost] = useState(null);
    const { user } = useContext(UserContext);
    const params = useParams();
    const confirm = useConfirm();
    const navigate = useNavigate();
    const [txt, setTxt] = useState(null);

    useEffect(() => {
        readPost(params.id, setPost);
    }, [params.id]);

    const handleDelete = async () => {
        try {
            await confirm({
                description: "Ez egy visszavonhatatlan művelet!",
                confirmationText: "Igen",
                cancellationText: "Mégsem",
                title: "Biztosan törölni akarod a posztot?"
            });
            deletePost(params.id);
            delPhoto(post.photo.id);
            navigate('/posts');
        } catch (error) {
            console.log('mégse:', error);
        }
    };

    const handleLikes = () => {
        if (!user) setTxt("Csak bejelentkezett felhasználók likeolhatnak!");
        else toggleLikes(post.id, user.uid);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            paddingTop: '110px'
        }}>
            <Header />
            
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '2rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid #333'
            }}>
                {post && (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <button 
                                onClick={() => navigate('/posts')}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '1rem'
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                Vissza a posztokhoz
                            </button>
                            
                            {user && post && (user.uid === post.userId) && (
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button 
                                        onClick={() => navigate('/update/' + post.id)}
                                        style={{
                                            backgroundColor: '#2c3e50',
                                            border: 'none',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faEdit} />
                                        Szerkesztés
                                    </button>
                                    <button 
                                        onClick={handleDelete}
                                        style={{
                                            backgroundColor: '#e74c3c',
                                            border: 'none',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                        Törlés
                                    </button>
                                </div>
                            )}
                        </div>

                        <div style={{
                            marginBottom: '2rem',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                        }}>
                            <img 
                                src={post.photo?.url} 
                                alt={post.title} 
                                style={{
                                    width: '100%',
                                    maxHeight: '500px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        <div style={{
                            backgroundColor: '#0d0d0d',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            marginBottom: '2rem',
                            border: '1px solid #333'
                        }}>
                            {parse(post.story || "")}
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: '#0d0d0d',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <button 
                                onClick={handleLikes}
                                style={{
                                    backgroundColor: '#2c3e50',
                                    border: 'none',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    ':hover': {
                                        backgroundColor: '#3d5166'
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faThumbsUp} />
                                Like
                            </button>
                            <span style={{ fontSize: '1.1rem' }}>
                                Likes: {post?.likes?.length || 0}
                            </span>
                            {txt && (
                                <span style={{ color: '#e74c3c', marginLeft: 'auto' }}>
                                    {txt}
                                </span>
                            )}
                        </div>
                    </>
                )}
            </div>

            {txt && <Toastify message={txt} type="error" />}
        </div>
    );
};