import "./Inventory.css";
import { useState, useEffect } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard.jsx";
import StoryBox from "../../components/StoryBox/StoryBox.jsx";

export default function Inventory({userName, token}) {
    const [ownedCards, setOwnedCards] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/inventory/${userName}/`,{
            headers: {"Authorization": `${token}`}
        })
        .then(res => res.json())
        .then(data => setOwnedCards(data))
        .catch(err => console.log(err));
    }, [])

    return (
        <main className = "inventory">
            {
                ownedCards.map((card) => <StoryBox key={card.id} card={card}/>)
            }
        </main>
    )
}