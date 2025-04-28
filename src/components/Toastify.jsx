import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faTimesCircle, 
  faInfoCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

const SuccessToast = ({ message }) => (
  <div className="toast-success">
    <FontAwesomeIcon icon={faCheckCircle} className="toast-icon" />
    <span>{message}</span>
  </div>
);

const ErrorToast = ({ message }) => (
  <div className="toast-error">
    <FontAwesomeIcon icon={faTimesCircle} className="toast-icon" />
    <span>{message}</span>
  </div>
);

export const Toastify = ({ err, signin, signup, resetPW, update }) => {
  const { setMsg } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (err) {
      toast.error(<ErrorToast message={err} />, {
        position: "top-right",
        className: 'toast-dark-error'
      });
    } else if (signin || signup) {
      toast.success(<SuccessToast message={signin || signup} />, {
        position: "top-center",
        className: 'toast-dark-success',
        autoClose: 2000,
        hideProgressBar: true
      });
      setTimeout(() => navigate('/'), 2000);
    } else if (resetPW) {
      toast.success(<SuccessToast message={resetPW} />, {
        position: "top-center",
        className: 'toast-dark-success',
        autoClose: 2000,
        hideProgressBar: true
      });
      setTimeout(() => navigate('/auth/in'), 2000);
    } else if (update) {
      toast.success(<SuccessToast message={update} />, {
        position: "top-center",
        className: 'toast-dark-success',
        autoClose: 2000,
        hideProgressBar: true
      });
    }
    setMsg({});
  }, [err, signin, signup, resetPW, update]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastClassName="toast-dark"
      progressClassName="toast-progress"
      style={{
        width: "auto",
        maxWidth: "500px",
        fontSize: "14px"
      }}
    />
  );
};