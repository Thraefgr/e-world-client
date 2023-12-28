import "./World.css";
import Factions from "../../components/Factions/Factions.jsx";
import Billboard from "../../components/Billboard/Billboard.jsx";

export default function World() {
    return (
        <main className="World">
            <Billboard />
            <Factions />
        </main>
    )
}