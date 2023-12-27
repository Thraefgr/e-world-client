import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom';
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"

const Login = () => {
  return (
    <div>
        <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div>
        
        <div className='main'>
        <div className="login wrap">
            <h1>LOGIN</h1>
                <input className='input'
                    placeholder="Username"
                    id="username"
                    name="username"
                    type="text"
                />
                <input className='input' placeholder="Password" id="password" name="password" type="password" />
                <input value={"Submit"} className="btn" type="submit" />
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