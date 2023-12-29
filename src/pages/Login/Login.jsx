import React, {useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom';
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"

const Login = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();

    const handleInputChangeUsername = (e) => {
    setUsername(e.target.value);
  };
    const handleInputChangePassword = (e) => {
    setPassword(e.target.value);
  };

    const handleSubmit =async(e) => {
            e.preventDefault();
            const body=
        {
            "username":`${username}`,
            "password":`${password}`
        }
        try {
            const response = await fetch('http://127.0.0.1:8000/user/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            });
            const data=await response.json();
            if (response.ok) {
              navigate("/");
              localStorage.setItem("userName",data["username"])
              localStorage.setItem("token","Token "+data["key"]);
              localStorage.setItem("balance",data["balance"]);
              localStorage.setItem("profileImg",data["profile_photo"]);
              navigate("/");
              window.location.reload();
            } else {
              console.error('Sign in failed');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        
        };
        
  return (
    <div >
        <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div>
        
        <div className='main'>
        <div className="login wrap">
            <h1>SIGN IN</h1>
            <form >
                <input className='input'
                    placeholder="Username"
                    autoComplete='username'
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={handleInputChangeUsername}
                />
                <input className='input' placeholder="Password" id="password" name="password" type="password" value={password} autoComplete="current-password" onChange={handleInputChangePassword}/>
                <button value={"Submit"} className="btn" type="submit" onClick={handleSubmit}>Login</button>
            </form>
                
                <p>Dont you have an account? <Link to="/register">Sign Up</Link></p>
                
        </div>
</div>
<div className='corner'>
            <img src={bottomLeft} alt="" className='bottomStyle'/>
            <img src={bottomRight} alt="" className='bottomStyle'/>
        </div>
    </div>
  )
  }

export default Login