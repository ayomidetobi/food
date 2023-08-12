import  { useEffect } from 'react';
import approve from './assets/image/app.png'
import { useNavigate ,useParams} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Spinner from './components/spinner';

function ActivationSuccess() {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const { activate, activationSuccess } = useAuth();

  useEffect(() => {
    // Extract uid and token from the URL (you can use a library like query-string)
    

    // Perform account activation (you can call your API here if needed)

    // After activation, you can automatically log in the user
    activate(uid, token);
    const redirectTimer = setTimeout(() => {
      // Redirect to the login page
      navigate('/login');
    }, 6000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [activate, navigate]);
  return (
    <div className="activation-success ">
       {activationSuccess ? ( 
        <>
          <img src={approve} alt="" className='approve'/>
          <p className='fs-4 '>Thank you your email has been verified.
          You will now be redirected to the login page.</p>
        </>
      ) : (
        <Spinner />
      )} 
    </div>
  );
}

export default ActivationSuccess;
