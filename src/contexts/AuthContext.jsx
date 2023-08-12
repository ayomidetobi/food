import { createContext, useContext, useReducer, useEffect,useState } from 'react';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null, // Retrieve token from localStorage
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.access_token); // Save token to localStorage
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access_token,
      };
    case 'LOGOUT':
      localStorage.removeItem('token'); // Remove token from localStorage on logout
      return {
        ...state,
        user: null,
        token: null,
      };
      case 'REGISTER':
      // Handle user registration (no token storage)
      return state;
    
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [activationSuccess, setActivationSuccess] = useState(false);
  
  const register = async ( username, password, email, re_password) => {
    try {
      const response=await axios.post('http://localhost:8000/auth/users/', {username, password, email, re_password});
      console.log(response.data)
      
      // if (response.status === 201) {
      //   toast.success('Logged in successfully!', { position: 'top-right' });
        
      // }
      // Handle successful registration (e.g., show success message)
    } catch (error) {
      toast.error('Registration error:', error);
      if (error.response) {
        console.error(error.response.data);
      }
      // Handle registration error (e.g., show error message)
    }
  };
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/auth/jwt/create/', { username, password });
      const user = response.data.user;
      const access_token = response.data.access;
      dispatch({ type: 'LOGIN', payload:{ user, access_token } });
      console.log(response.data)
      
      if (response.status === 200) {
        toast.success('Logged in successfully!', { position: 'top-right' });
      }
      // Store JWT in localStorage or cookies
    } catch (error) {
      
        toast.error('Invalid username or password.', { position: 'top-right' });
      
    }
  };
  const logout = () => {
    // Clear JWT from localStorage or cookies
    dispatch({ type: 'LOGOUT' });
  };
  const getCurrentUser = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/auth/users/me/',{
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  };
  const getUserProfile = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/userprofiles/${userId}/`);
      const user =response.data
      console.log(user)
      return user;
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  };
  const updateUserProfile = async (userId, userProfile,token) => {
    try {
      const response = await axios.put(`http://localhost:8000/api/userprofiles/${userId}/`,
      userProfile ,{
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
      const user =response.data
      console.log(user)
      return user;
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  };
  const activate = async (uid, token) => {
    try {
      await axios.post('http://localhost:8000/auth/users/activation/', { uid, token });
      setActivationSuccess(true);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
      }
      console.error('Activation error:', error);
      // Handle activation error (e.g., show error message)
    }
  };
  
  return (
    <AuthContext.Provider value={{ state,login,register,logout,getCurrentUser ,activate,getUserProfile,updateUserProfile, activationSuccess}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
