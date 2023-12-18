import "./PurchasePopUp.css"

export default function PurchasePopUp({card, visibility, setVisibility, popUpPosition, setPopUpPosition}) {
    const bodyParam = {
        username: "buyer",
        cardname: "Emiruto"
    }
    const handleYes = () => {
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Token 38adab0e4a81f003456b2e1fbcad58e92c8d74cf"
            },
            body: JSON.stringify(bodyParam)
        }).then(response => response.json()).then(data => setVisibility("none"))
    }

    const handleNo = () => {
        setPopUpPosition("0")
        setTimeout(() => setVisibility("none"), 200)
    }
    return (
        <div className="purchase-pop-up" style={{display: `${visibility}`, transform: `translateY(${popUpPosition})`}}>
            <div className="question">Purchase "{card.cardname}"<br /> for {card.price} E-Coin?</div>
            <div className="answer">
                <button className="choice no" onClick={handleNo}>No</button>
                <button className="choice yes" onClick={handleYes}>Yes</button>
            </div>
        </div>
    )
}