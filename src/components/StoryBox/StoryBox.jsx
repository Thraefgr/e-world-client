import "./StoryBox.css";
import InventoryCard from "../InventoryCard/InventoryCard.jsx";

export default function StoryBox({card}) {
    return (
        <div className="story-box">
            <InventoryCard card={card}/>
            <div className="inventory-card-story">
                <p>
                    {card.detail}
                </p>
            </div>
        </div>
    )
}