import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useConfirm } from 'material-ui-confirm';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/Header';
import { Toastify } from '../components/Toastify';

export const DeleteAccount = () => {
    const { user, logoutUser, deleteAccount, msg } = useContext(UserContext);
    const confirm = useConfirm();
    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/');
    }, [user, navigate]);

    const handleDelete = async () => {
        try {
            await confirm({
                description: "Ez egy visszavonhatatlan művelet! Minden adatod végleg törlődni fog.",
                confirmationText: "Igen, törlöm",
                cancellationText: "Mégsem",
                title: "Biztos, hogy törölni szeretnéd a fiókodat?",
                confirmationButtonProps: {
                    style: {
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none'
                    }
                },
                cancellationButtonProps: {
                    style: {
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        border: 'none'
                    }
                },
                dialogProps: {
                    PaperProps: {
                        style: {
                            backgroundColor: '#1a1a1a',
                            color: 'white',
                            padding: '20px',
                            border: '1px solid #333'
                        }
                    }
                }
            });
            await deleteAccount();
            logoutUser();
            navigate('/');
        } catch (error) {
            console.log('mégse:', error);
        }
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
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#1a1a1a',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                border: '1px solid #333',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <button 
                    onClick={() => navigate(-1)}
                    style={{
                        position: 'absolute',
                        left: '20px',
                        top: '90px',
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
                    Vissza
                </button>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <FontAwesomeIcon 
                        icon={faExclamationTriangle} 
                        style={{
                            fontSize: '3rem',
                            color: '#e74c3c'
                        }} 
                    />
                    <h2 style={{
                        margin: 0,
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        color: 'white'
                    }}>
                        Fiók törlése
                    </h2>
                    <p style={{
                        color: '#95a5a6',
                        lineHeight: '1.6'
                    }}>
                        A fiók törlésével minden adatod végleg törlődni fog. Ez a művelet nem vonható vissza!
                    </p>
                </div>

                <button
                    onClick={handleDelete}
                    style={{
                        width: '100%',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        padding: '12px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        ':hover': {
                            backgroundColor: '#c0392b'
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                    Felhasználói fiók törlése
                </button>
            </div>

            {msg && <Toastify {...msg} />}
        </div>
    );
};