import "./Card.css";

export default function Card() {
    return (
        <div className="card">
            <div className="card-faces">
                <div className="back-face">
                    <p>Once upon a time there was a wicked card!</p>
                </div>
                <div className="front-face">
                    <h4 className="card-power">22</h4>
                    <h3 className="card-name">Ferhat Khan</h3>
                </div>
            </div>
            <div className="card-buttons">
                <button className="rotate-left">Turn left</button>
                <button className="purchase">Purchase</button>
                <button className="rotate-right">Turn right</button>
            </div>
        </div>
    )
}