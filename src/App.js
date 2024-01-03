import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from  './pages/Layout/Layout.jsx'
import Home from "./pages/Home/Home.jsx";
import Inventory from './pages/Inventory/Inventory.jsx';
import World from './pages/World/World.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import UserUpdate from './pages/UserUpdate/UserUpdate.jsx';
import Error from './pages/Error/Error.jsx';
import Dotnet from './pages/Dotnet/Dotnet.jsx';

function App() {
  const token = localStorage.getItem("token");//Pass this token to your pages and components if you need to do something with user authenthication.
  const userName = localStorage.getItem("userName");
  const balance = localStorage.getItem("balance");
  const profileImg = localStorage.getItem("profileImg");
  //WARNING! Token we get from server is like this "38adab0e4a81f003456b2e1fbcad58e92c8d74cf" but we set token like this localStorage.setItem("token", "Token 38adab0e4a81f003456b2e1fbcad58e92c8d74cf")
  return (//Each "element prop" of routes will be replaced by page components like the first one.
    <Routes>
      <Route path="/" element={<Layout token={token} balance={balance} profileImg={profileImg} userName={userName} />}>
        <Route index element={<Home token={token} userName={userName}/>} />
        <Route path="world" element={<World />} />
        <Route path="inventory" element={<Inventory userName={userName} token={token} />} />
        <Route path="account" element={<UserUpdate token={token} userName={userName}/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="dotnet" element={<Dotnet />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
