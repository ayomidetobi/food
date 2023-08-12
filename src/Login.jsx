import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from './contexts/AuthContext';
import logo from './assets/image/Kedak-Tech-Logo2.png'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Login() {

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response=await login(username, password);
      if (response.status === 200) {
        console.log(response.status)
        toast.success('Logged in successfully!', { position: 'top-right' });
      }
    } catch (error) {
      toast.error( 'Invalid username or password.', 'error');
    }
  }
  return (
    <div className="login">
      <div className="top">
        

        <img src={logo} alt="" className="mt-4" />

        <h1 className="mt-3">Login</h1>

        <p className="fs-6 mt-4">Login to Kedak Tech. Use your contact card to <br /> easily share your social media details.</p>

        <button>I'm new to Kedak, <Link to={'/signup'}>Sign Up</Link></button>
      </div>

      <form  onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input 
            type="name"
            className="form-control form-control focus-ring focus-ring-dark" 
            id="exampleFormControlInput1" 
            placeholder="Type username here" 
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='on'
            />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
          type="password" 
          id="inputPassword5" 
          className="form-control form-control focus-ring focus-ring-dark" 
          aria-describedby="passwordHelpBlock"
          placeholder="Type password here"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          required
          />
            
        </div>
        <p className="text-end pt-3 text-secondary">forgot your password? <Link to={"/"} className="fw-semibold text-dark">Reset it</Link></p>
        <div className=""style={{marginTop:"70px"}}>
          <button type="submit">Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login;
