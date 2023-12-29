import React, { useState } from 'react'
import "./Register.css";
import "../Home/Home"
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"
import {useNavigate } from 'react-router-dom';

const Register = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [password2,setPassword2]=useState("")
    const navigate=useNavigate();

    const handleInputChangeUsername = (e) => {
        setUsername(e.target.value);
      };
      const handleInputChangeEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleInputChangePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleInputChangePassword2 = (e) => {
        setPassword2(e.target.value);
      };

    const handleSubmit = async(e) => {
            e.preventDefault();
            const body=
            {
            "username":`${username}`,
            "email":`${email}`,
            "password":`${password}`,
            "password2":`${password2}`
            }
            try {
              const response = await fetch('http://127.0.0.1:8000/user/register/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
              });
              const data= await response.json()
              if (response.ok) {
                localStorage.setItem("userName",data["username"])
                localStorage.setItem("token","Token "+data["key"]);
                localStorage.setItem("balance",data["balance"]);
                localStorage.setItem("profileImg",data["profile_photo"]);
                navigate("/");
                window.location.reload();
              } else {
                console.error('Registration failed');
              }
            } catch (error) {
              console.error('An error occurred:', error);
            }
          };

  return (
    <div className='register'>
        <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div>
        <div className='main'>
            <div className="login wrap">
                <h1>REGISTER</h1>
                <form>
                    <input className='input'
                    placeholder="Username"
                        id="username"
                        name="email"
                        type="text"
                        value={username}
                        onChange={handleInputChangeUsername}
                    />
                <input className='input'
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={handleInputChangeEmail}
                    />
                <input className='input' placeholder="Password" id="password1" name="password" type="password" value={password} onChange={handleInputChangePassword}/>
                <input className='input' placeholder="Confirm Password" id="password2" name="password" type="password" value={password2} onChange={handleInputChangePassword2}/>
                <button value={"Submit"} className="btn" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
                
            </div>
        </div>
        <div className='corner'>
            <img src={bottomLeft} alt="" className='bottomStyle'/>
            <img src={bottomRight} alt="" className='bottomStyle'/>
        </div>
    </div>
  )
}

export default Register