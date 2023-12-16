import "./Card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="card-faces">
                <div className="front-face">Hey this is the front of the card!</div>
                <div className="back-face">Hey this is the front of the card!</div>
            </div>
            <div class="card-buttons">
                <button className="rotate-left">Turn left</button>
                <button className="purchase">Purchase</button>
                <button className="rotate-right">Turn right</button>
            </div>
        </div>
    )
}