import "./InventoryCard.css";

export default function InventoryCard({card}) {
    return (
        <div className="inventory-card">
            <div className="inventory-card-faces">
                <div className="inventory-back-face" style={{backgroundImage: `url(${card.faction})`}}>
                </div>
                <div className="inventory-front-face" style={{backgroundImage: `url(${card.image})`}}>
                    <h4 className="inventory-card-power">{card.power}</h4>
                    <h3 className="inventory-card-name">{card.cardname}</h3>
                </div>
            </div>
        </div>
    )
}