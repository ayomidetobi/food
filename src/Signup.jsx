import { Link } from "react-router-dom";
import logo from './assets/image/Kedak-Tech-Logo2.png'
import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Signup() {

  
  const  {register} = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username) {
      toast.error('Username is required. ', { position: 'top-right' });
      return;
    }
    if (username.includes('.')) {
      toast.error('Username cannot contain a period.', { position: 'top-right' });
      return;
    }

    if (!email || !emailRegex.test(email)) {
      toast.error(' Please provide a valid email address.', { position: 'top-right' });
      return;
    }
    // Check if passwords match
    if (password !== re_password) {
      toast.error( 'Passwords do not match.', );
      return;
    }
    if (password.length < 8) {
      toast.error('This password is too short. It must contain at least 8 characters.', { position: 'top-right' });
      return;
    }

    try {
      const response =await register( username, password, email, re_password);
      if (response.status === 201) {
        toast.success('Logged in successfully!', { position: 'top-right' });
        // setTimeout(() => {
        //   navigate('/registration/confirm-email'); // Redirect to confirm email page
        // }, 5000);
      }
    } catch (error) {
      
      if (error.response) {
        console.error(error.response.data);
      }
      toast.error( 'Invalid username or password.');

      // Handle registration error (e.g., show error message)
    }
  };

  return (
    <div className="login">
      <div className="top">
        <img src={logo} alt="" className="mt-4" />
        <h1 className="mt-3">Signup</h1>
        <p className="fs-6 mt-4">Register to Kedak Tech. Use your contact card to <br /> easily share your social media details.</p>
        <button>I already have an account <Link to={'/login'}> Log In</Link></button>
      </div>

      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input 
          type="text" 
          className="form-control focus-ring focus-ring-dark" 
          placeholder="Type username here..." value={username} 
          onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input 
          type="email" 
          className="form-control focus-ring focus-ring-dark" 
          placeholder="Type email here..." value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
          type="password" 
          className="form-control form-control focus-ring focus-ring-dark" 
          placeholder="Type password here" value={password} 
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control form-control focus-ring focus-ring-dark" placeholder="Type confirm password here" value={re_password} onChange={(e) => setRePassword(e.target.value)} />
        </div>

        <div className="" style={{ marginTop: '70px' }}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
  
}

export default Signup;
