import "./PurchasePopUp.css"

export default function PurchasePopUp({card, visibility}) {
    return (
        <div className="purchase-pop-up" style={{display: `${visibility}`}}>
            <div className="question">Purchase "{card.cardname}"<br /> for {card.price} E-Coin?</div>
            <div className="answer">
                <button className="no">No</button>
                <button className="yes">Yes</button>
            </div>

        </div>
    )
}