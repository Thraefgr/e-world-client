import React, { useEffect, useState } from 'react'
import "./UserUpdate.css";
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"

const UserUpdate = ({token,userName}) => {
    const [data,setData]=useState("")
    const [username,setUsername]=useState("")
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [file,setFile]=useState("")
    const [currentPassword,setCurrentPassword]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [confirmNewPassword,setConfirmNewPassword]=useState("")
    const handleInputChangeUsername = (e) => {
        setUsername(e.target.value);
      };
      const handleInputChangeFirstname = (e) => {
        setFirstname(e.target.value);
      };
      const handleInputChangeLastName = (e) => {
        setLastname(e.target.value);
      };
      const handleInputChangeEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleInputChangeFile = (e) => {
        setFile(e.target.value);
      };
      const handleInputChangeCurrentPassword = (e) => {
        setCurrentPassword(e.target.value);
      };
      const handleInputChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
      };
      const handleInputChangeConfirmNewPassword = (e) => {
        setConfirmNewPassword(e.target.value);
      };
      console.log(userName);
      useEffect(() => {
        fetch(`http://127.0.0.1:8000/user/update/${userName}`, {
            headers: {
                "Authorization": `${token}`
            }
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
        localStorage.setItem("userName",`${username}`)
    }, [])
    
  return (
    <div className='user'>
        {/* <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div> */}
        <div className='main'>
            <div className="login wrap">
                <h1>UPDATE</h1>
                <form action="">
                <   div className='section'>
                    <div className='section1'>
                    <input className='input'
                    placeholder="Username"
                        id="username"
                        name="email"
                        type="text"
                        value={username}
                        onChange={handleInputChangeUsername}
                    />
                <input className='input'
                    placeholder="First Name"
                        id="firstname"
                        name="email"
                        type="text"
                        value={firstname}
                        onChange={handleInputChangeFirstname}
                    />
                    <input className='input'
                    placeholder="Last Name"
                        id="lastname"
                        name="email"
                        type="text"
                        value={lastname}
                        onChange={handleInputChangeLastName}
                    />
                <input className='input'
                        placeholder="Email"
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={handleInputChangeEmail}
                    />
                </div>
                <div className='section2'>
                    <div className="form-group file-area">
                        <input type="file" name="images" id="file" required="required" multiple="multiple" value={file} onChange={handleInputChangeFile}/>
                        <div className="file-dummy">
                        <div className="success">Your files are selected.</div>
                        <div className="default">Please select some files</div>
                        </div>
                    </div>
                    <input className='input' placeholder="Current Password" id="currentPassword" name="password" type="password" value={currentPassword} onChange={handleInputChangeCurrentPassword}/>
                    <input className='input' placeholder="New Password" id="newPassword" name="password" type="password" value={newPassword}
                    onChange={handleInputChangeNewPassword}/>
                    <input className='input' placeholder="Confirm New Password" id="newPassword2" name="password" type="password" value={confirmNewPassword}
                    onChange={handleInputChangeConfirmNewPassword}/>
                </div>
                </div> 
                <input value={"Save"} className="btnSave" type="submit" />
                <input value={"Delete"} className="btnDel" type="submit" />
                </form>
                
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