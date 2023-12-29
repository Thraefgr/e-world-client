import Navbar from '../../components/Navbar/Navbar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout({token}) {
    return (
        <div className="layout">
            <Navbar/>
            <Outlet />
            <footer>This is footer!</footer>
        </div>
    )
}