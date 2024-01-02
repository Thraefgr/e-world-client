import { useEffect, useState } from "react";
import "./InventoryCard.css";

export default function InventoryCard({card}) {
    const [url, setUrl] = useState("");
    useEffect(() => {
        fetch(card.image)
        .then(response => response.blob())
        .then(blob => {
            const localUrl = window.URL.createObjectURL(blob);
            setUrl(localUrl);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="inventory-card">
            <div className="inventory-card-faces">
                <div className="inventory-back-face" style={{backgroundImage: `url(${card.faction})`}}>
                    <a className="download-link" href={url} download={card.cardname + ".jpeg"}>Download The Card Image</a>
                </div>
                <div className="inventory-front-face" style={{backgroundImage: `url(${card.image})`}}>
                    <h4 className="inventory-card-power">{card.power}</h4>
                    <h3 className="inventory-card-name">{card.cardname}</h3>
                </div>
            </div>
        </div>
    )
}