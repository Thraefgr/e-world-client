import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout({ token ,userName,balance,profileImg}) {
    return (
        <div className="layout">
            <Navbar userName={userName} token={token} balance={balance} profileImg={profileImg} />
            <Outlet />
            <footer>This is footer!</footer>
        </div>
    )
}