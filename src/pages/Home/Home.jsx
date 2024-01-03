import "./Home.css";
import Cards from "../../components/Cards/Cards.jsx";
import Welcome from "../../components/Welcome/Welcome.jsx";
import React, { useEffect, useState } from 'react';


export default function Home({ token, userName }) {
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        let alert = localStorage.getItem("alert");
        if (alert === 'true') {
            setAlertVisible(true);
            const timeout = setTimeout(() => {
                setAlertVisible(false);
                localStorage.setItem("alert", "false");
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, []);

    return (
        <main className="home">
            {alertVisible && (
                <div className="alert delete-alert">
                    <span className="closebtn" onClick={() => {localStorage.setItem("alert", "false"); setAlertVisible(false)}}>&times;</span>
                    Deleted Successfuly
                </div>
            )}
            <Welcome />
            <Cards token={token} userName={userName} />
        </main>
    )
}