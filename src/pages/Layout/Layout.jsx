import './Layout.css';
import { Outlet } from 'react-router-dom';

export default function Layout({token}) {
    return (
        <div className="layout">
            <header>This is Header!</header>
            <Outlet />
            <footer>This is footer!</footer>
        </div>
    )
}