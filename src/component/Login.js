import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import Nav from './Nav';


export default function Login() {
    // const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const predefinedUsername = 'user';
        const predefinedPassword = '1234';

        if ( password === predefinedPassword) 
            {
      
            setError('');
   
            localStorage.setItem('isLoggedIn', true);
            // window.location.href = '/Add';
            navigate('/Add');
        }
         else {
            setError('Invalid password');
        }
    };


    const passwordvisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      };
        
    return (
        <>
<Nav></Nav>
        <div className='image' >
        
        <Helmet>
                <style>{'body {background-image: linear-gradient(to right, rgba(255, 0, 77), rgba(250, 239, 93));}'}</style>
            </Helmet>

        <div className='d-grid gap-2 col-6 mx-auto'  >

            <div className="position-absolute top-50 start-50 translate-middle">

                <div className='zzz'>
                <h1>User Details</h1>
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="username" className="form-label">User Name</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /> */}
                    <label htmlFor="inputPassword5" className="form-label">Enter your Password</label>
                    <input
                       type={isPasswordVisible ? 'text' : 'password'}
                        id="inputPassword5"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    
                      
                    />

            <p className='eye' onClick={passwordvisibility} >
                        {isPasswordVisible ? <i class="bi bi-eye"></i> :    <i class="bi bi-eye-slash"></i>}
                </p>
             

                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers.
                    </div>
                    {error && <div className="alert alert-danger mt-2">{error}</div>}
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>

                


                </form>
                
                </div>



            </div>
        </div>
        
        
        </div>

        </>
    );
}


