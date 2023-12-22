import "./Home.css";
import Billboard from "../../components/Billboard/Billboard.jsx";
import Cards from "../../components/Cards/Cards.jsx";

export default function Home({token}) {
    return (
        <main className="home">
            <Billboard />
            <Cards token={token}/>
        </main>
    )
}