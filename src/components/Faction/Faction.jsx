import "./Faction.css";

export default function Faction({faction}) {
    return (
        <div className="faction">
            <img src={faction.flag} alt=""/>
            <div>
                <h2>{faction.faction_name}</h2>
                <p>{faction.history}</p>
            </div>
        </div>
    )
}