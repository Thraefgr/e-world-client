import "./Home.css";
import Welcome from "../../components/Welcome/Welcome.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Cards from "../../components/Cards/Cards.jsx";
import Welcome from "../../components/Welcome/Welcome.jsx";


export default function Home({token, userName}) {
    return (
        <main className="home">
            <Welcome />
            <Cards token={token} userName={userName}/>
        </main>
    )
}