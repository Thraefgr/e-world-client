import React from 'react'
import "./UserUpdate.css";
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"

const UserUpdate = () => {
  return (
    <div className='user'>
        {/* <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div> */}
        <div className='main'>
            <div className="login wrap">
                <h1>UPDATE</h1>
                <div className='section'>
<div className='section1'>
                    <input className='input'
                    placeholder="Username"
                        id="username"
                        name="email"
                        type="text"
                    />
                <input className='input'
                    placeholder="First Name"
                        id="firstname"
                        name="email"
                        type="text"
                    />
                    <input className='input'
                    placeholder="Last Name"
                        id="lastname"
                        name="email"
                        type="text"
                    />
                <input className='input'
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="text"
                    />
                </div>
                <div className='section2'>
                    <div className="form-group file-area">
                        <input type="file" name="images" id="file" required="required" multiple="multiple"/>
                        <div className="file-dummy">
                        <div className="success">Your files are selected.</div>
                        <div className="default">Please select some files</div>
                        </div>
                    </div>
                    <input className='input' placeholder="Current Password" id="currentPassword" name="password" type="password" />
                    <input className='input' placeholder="New Password" id="newPassword" name="password" type="password" />
                    <input className='input' placeholder="Confirm New Password" id="newPassword2" name="password" type="password" />
                </div>
                </div>
                
                <input value={"Save"} className="btnSave" type="submit" />
                <input value={"Delete"} className="btnDel" type="submit" />
            </div>
            
        </div>
        
        {/* <div className='corner'>
            <img src={bottomLeft} alt="" className='bottomStyle'/>
            <img src={bottomRight} alt="" className='bottomStyle'/>
        </div> */}
    </div>
  )
}

export default UserUpdate