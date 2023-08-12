import mail from './assets/image/mail.png'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function RegSuccess() {
    const notify = () => toast("Wow so easy!");
    const navigate=useNavigate();
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigate('/login');
        }, 6000);
    
        return () => clearTimeout(timeout);
      }, [navigate]);
    
  return (
    <>
        <div className='activation-success'>
        <h5 className='pb-4'>Thank you</h5>
      <img src={mail} alt="" className='approve'/>
          <p className='fs-4 '>A verification email has been sent to your mail
          kindly check your mail to complete registration</p>
          <button onClick={notify}>Notify!</button>
          </div>
    </>
  )
}

export default RegSuccess;
