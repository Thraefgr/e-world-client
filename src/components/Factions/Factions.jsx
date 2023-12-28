import "./Factions.css";
import Faction from "../Faction/Faction.jsx";
import { useEffect, useState } from "react";
export default function Factions() {
    const [factions, setFactions] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/factions/")
        .then(res => res.json())
        .then(data => setFactions(data))
    })
    return (
        <section className="factions">
            {factions.map(faction => <Faction key={faction.id} faction={faction}/>)}
        </section>
    )
}