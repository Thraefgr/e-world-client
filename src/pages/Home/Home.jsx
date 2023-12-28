import "./Home.css";
import Cards from "../../components/Cards/Cards.jsx";

export default function Home({token, userName}) {
    return (
        <main className="home">
            <Cards token={token} userName={userName}/>
        </main>
    )
}