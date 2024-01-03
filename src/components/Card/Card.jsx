import "./Card.css";
import { useState } from "react";
import PurchasePopUp from "../PurchasePopUp/PurchasePopUp";
import {useNavigate} from "react-router-dom";
import eCoin from "../../images/eworld.png";

export default function Card({card, token, userName}) {
    const [purchasePopUpVisibility, setpurchasePopUpVisibility] = useState("none");
    const [cardRotation, setCardRotation] = useState(0);
    const navigate = useNavigate();
    let ownership = "Purchase";
    const cardRotationStyle = {
        transform: `rotateY(${cardRotation}deg)`
    }

    const handleRotateRight = () => {
        setCardRotation(prev => (prev - 180) % 2880)
    }

    const handleRotateLeft = () => {
        setCardRotation(prev => (prev + 180) % 2880)
    }

    let handlePurchase = () => {
        if(token === null || token === "") {
            navigate("/login");
        } else {
            setpurchasePopUpVisibility("flex");
        }
    }
    
    const rotateRightSVG = 
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
             <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
         </svg>)
    
    const rotateLeftSVG = 
        (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
             <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
             <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
         </svg>)

    if (card.owned) {
        ownership = "Owned";
        handlePurchase = null;
    }

    return (
        <div className="card">
            <div className="card-faces" style={cardRotationStyle}>
                <div className="back-face" style={{backgroundImage: `url(${card.faction})`}}>
                    <p>{card.detail}</p>
                </div>
                <div className="front-face" style={{backgroundImage: `url(${card.image})`}}>

                    <div className="power-price-container">
                        <h4 className="card-power">{card.power}</h4>
                        <div className="card-price" title="Price of the card">{card.price}<img src={eCoin} alt="ecoin logo" width={32} height={32}/></div>
                    </div>
                    <PurchasePopUp token={token} userName={userName} card={card} visibility={purchasePopUpVisibility} setVisibility={setpurchasePopUpVisibility}/>
                    <h3 className="card-name">{card.cardname}</h3>
                </div>
            </div>
            <div className="card-buttons">
                <button className="card-button rotate-right" onClick={handleRotateRight}>{rotateRightSVG}</button>
                <button className="card-button purchase" onClick={handlePurchase}>{ownership}</button>
                <button className="card-button rotate-left" onClick={handleRotateLeft}>{rotateLeftSVG}</button>
            </div>
        </div>
    )
}
