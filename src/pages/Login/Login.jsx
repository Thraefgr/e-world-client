import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleInputChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleInputChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body =
    {
      "username": `${username}`,
      "password": `${password}`
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("userName", data["username"])
        localStorage.setItem("token", "Token " + data["key"]);
        localStorage.setItem("balance", data["balance"]);
        localStorage.setItem("profileImg", data["profile_photo"]);
        navigate("/");
        window.location.reload();
      } else {
        const alertBox = document.createElement('div');
        alertBox.classList.add('alert', 'login-alert');
        alertBox.innerHTML = `
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            ${data['message']} 
          `;
        document.body.appendChild(alertBox);
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 3000);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  };

  return (
    <div >
      <div className='login-corner_top'>
        <img src={topLeft} alt="" className='topStyle' />
        <img src={topRight} alt="" className='topStyle' />
      </div>
      {/* <div class="alert">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        This is an alert box.
      </div> */}
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
            <input className='input' placeholder="Password" id="password" name="password" type="password" value={password} autoComplete="current-password" onChange={handleInputChangePassword} />
            <button value={"Submit"} className="btn" type="submit" onClick={handleSubmit}>Login</button>
          </form>

          <div class="center_text">
            <p>Dont you have an account? <a href="/register">Register</a></p>
          </div>

        </div>
      </div>
      <div className='login-corner_bottom'>
        <img src={bottomLeft} alt="" className='bottomStyle' />
        <img src={bottomRight} alt="" className='bottomStyle' />
      </div>
    </div>
  )
}

export default Login