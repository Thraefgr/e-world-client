import React, { useEffect, useState } from 'react'
import "./UserUpdate.css";
import { Navigate, useNavigate } from 'react-router-dom';

const UserUpdate = ({ token, userName }) => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState({})
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const navigate = useNavigate();

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
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
    const fileInput = e.target;
    const customFileLabel = fileInput.parentElement;

    if (selectedFile) {
      customFileLabel.classList.add('file-selected');
      customFileLabel.textContent = 'File Selected'; // Metni değiştir
    } else {
      customFileLabel.classList.remove('file-selected');
      customFileLabel.textContent = 'Update Profile Photo'; // Orjinal metin
    }
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

  const getData = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      console.clear()
      const response = await fetch(`http://127.0.0.1:8000/user/update/${userName}`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `${token}`,
        }
      });
      const data = await response.json()
      if (response.ok) {
        setUsername(data["username"])
        setFirstname(data["first_name"])
        setLastname(data["last_name"])
        setFile(data["profile_photo"])
        setEmail(data["email"])
        setData(data)
        console.log(firstname);
        // window.location.reload();
      } else {
        console.error('getdata failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  if (token === null || token === "") {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    let form_data = new FormData();
    if (file instanceof File) {
      form_data.append("profile_photo", file);
    }
    form_data.append("username", username);
    form_data.append("last_name", lastname);
    form_data.append("first_name", firstname);
    form_data.append("email", email);
    form_data.append("current_password", currentPassword);
    form_data.append("new_password", newPassword);
    form_data.append("new_password2", confirmNewPassword);
    console.log("FORM DATA: ", form_data);

    try {
      const response = await fetch(`http://127.0.0.1:8000/user/update/${userName}`, {
        method: 'PUT',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          "Authorization": `${token}`,
        },
        body: form_data,
      });
      const data = await response.json()
      console.log(response.status);
      if (response.status === 200) {
        if (file instanceof File) {
          localStorage.setItem('profileImg', data['profile_photo'])
          setFile(data["profile_photo"])
        }
        localStorage.setItem('userName', data["username"])
        window.location.reload();
      } else {
        const alertBox = document.createElement('div');
        alertBox.classList.add('alert', 'register-alert');
        alertBox.innerHTML = `<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>`
        
        if (data['message']) {
          alertBox.innerHTML += `${data['message']}<br>`
          console.log(data['message'])
        }
        if (data['new_password']) {
          if (data['new_password'][0]) {
            alertBox.innerHTML += `${data['new_password'][0]}<br>`
          }
          if (data['new_password'][1]) {
            alertBox.innerHTML += `${data['new_password'][1]}<br>`
          }
        }
        document.body.appendChild(alertBox);
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 3000);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const deleteUser = async (e) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/user/update/${userName}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `${token}`
        },
      });
      console.log(response.status);
      if (response.status === 204) {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("profileImg");
        localStorage.removeItem("balance");
        localStorage.setItem("alert", "true");
        console.log(localStorage.getItem("alert"))
        window.location.reload();
      } else {
        console.error('DELETE failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='centered'>
      <div className='user'>
        <div className='main'>
          <div className="login wrap">
            <h1>UPDATE</h1>
            <form >
              <div className='section'>
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
                  <label className="custom-file-input">
                    Update Profile Photo
                    <input
                      type="file"
                      id="file"
                      onChange={handleInputChangeFile}
                    />
                  </label>

                  <input className='input' placeholder="Current Password" id="currentPassword" name="password" type="password" value={currentPassword} onChange={handleInputChangeCurrentPassword} />
                  <input className='input' placeholder="New Password" id="newPassword" name="password" type="password" value={newPassword}
                    onChange={handleInputChangeNewPassword} />
                  <input className='input' placeholder="Confirm New Password" id="newPassword2" name="password" type="password" value={confirmNewPassword}
                    onChange={handleInputChangeConfirmNewPassword} />
                </div>
              </div>
              <button value={"Save"} className="btnSave" type="submit" onClick={handleSubmit}>Save</button>
            </form>


          </div>

        </div>
        <div className='cardDetail'>
          <div className="cardDet">
            <img className="card-image" src={data["profile_photo"]} />
            <h3 className='userHeader'>{data["username"]}</h3>
            <p className="heading">{data["first_name"] ? data["first_name"] : ""} {data["last_name"] ? data["last_name"] : ""}
            </p>
            <p className="heading">
              {data["email"]}
            </p>
            <button value={"Delete"} className="btnDel" type="submit" onClick={deleteUser}>Delete</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserUpdate