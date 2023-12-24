import { useState } from "react"
import "./PurchasePopUp.css"

export default function PurchasePopUp({token, card, visibility, setVisibility, userName}) {
    const bodyParam = {
        username: `${userName}`,
        cardname: `${card.cardname}`
    }
    const [noAnimation, setNoAnimation] = useState("")
    const handleYes = () => {
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify(bodyParam)
        })
        .then(response => response.json())
        .then(() => window.location.reload())
    }

    const handleNo = () => {
        setVisibility("none");
    }
    return (
        <div className={"purchase-pop-up" + noAnimation} style={{display: `${visibility}`}}>
            <div className="question">Purchase "{card.cardname}"<br /> for {card.price} E-Coin?</div>
            <div className="answer">
                <button className="choice no" onClick={handleNo}>No</button>
                <button className="choice yes" onClick={handleYes}>Yes</button>
            </div>
        </div>
    )
}