import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from  './pages/Layout/Layout.jsx'
import Home from "./pages/Home/Home.jsx";

function App() {
  return (//Each "element prop" of routes will be replaced by page components like the first one.
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="world" element={<h2>Welcome to World Page!</h2>} />
        <Route path="account" element={<h2>Welcome to Account Page!</h2>} />
        <Route path="inventory" element={<h2>Welcome to Inventory Page!</h2>} />
        <Route path="login" element={<h2>Welcome to Login Page!</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
