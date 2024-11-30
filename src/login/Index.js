import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isLogin, setIsLogin] = useState(false);
    const navigate =  useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res =  await axios.post('https://simple-render-backend-2.onrender.com/signup',{name,email,password}).then(()=>{
      setIsLogin(true);
    }).catch(err =>{
      console.log('error in storing the data...',err);
    })

  };


  const handleLogin = async (e) =>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email,password);

    const res =  await axios.post('https://simple-render-backend-2.onrender.com/login',{email,password}).then(()=>{
      navigate('/home');
    }).catch(err =>{
      console.log('error in storing the data...',err);
    })

  }

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 w-100">
      {!isLogin && (
        <form
          className="container form-md row p-3 gap-2 w-100 h-30"
          style={{ maxWidth: '400px' }}
          onSubmit={handleSignup}
        >
          <h4 className="mb-3 text-center">Signup Page</h4>
          <input
            className="form-control mb-3 fs-4"
            type="text"
            placeholder="Email address"
            name="email"
            required
          />
          <input
            className="form-control mb-3 fs-4"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="form-control mb-3 fs-4"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="btn btn-primary col-12 fs-4" type="submit">
            Submit
          </button>
          <span onClick={()=>{setIsLogin(true)}}>already have an account ? click here...</span>
        </form>
      )}

      {isLogin && (
        <form
          className="container form-md row p-3 gap-2 w-100 h-30"
          style={{ maxWidth: '400px' }}
          onSubmit={handleLogin}
        >
          <h4 className="mb-3 text-center">Login Page</h4>
          <input
            className="form-control mb-3 fs-4"
            type="text"
            placeholder="Email address"
            name="email"
            required
          />
          <input
            className="form-control mb-3 fs-4"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="btn btn-primary col-12 fs-4" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Index;
