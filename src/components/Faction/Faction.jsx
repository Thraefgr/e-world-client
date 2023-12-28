import "./Faction.css";

export default function Faction({faction}) {
    return (
        <div className="faction" style={{backgroundImage: `url(${faction.flag})`}}>
            <div className="faction-info">
                <h2>{faction.faction_name}</h2>
                <p>{faction.history}</p>
            </div>
        </div>
    )
}