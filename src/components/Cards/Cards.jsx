import "./Cards.css";
import Card from "../Card/Card.jsx";
import { useEffect, useState } from "react";

export default function Cards({token, userName}) {
    const [cardList, setCardList] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/", {
            headers: {
                "Authorization": `${token}`
            }
        })
        .then(response => response.json())
        .then(data => setCardList(data))
    }, [])

    return (
        <section className="cards">
            {cardList.map(card => <Card key={card.id} card={card} token={token} userName={userName}/>)}
        </section>
    )
}