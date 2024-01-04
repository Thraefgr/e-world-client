import "./Dotnet.css";
import dotnet from "../../images/dotnet.jpeg"
export default function Dotnet() {
    return (
        <main className="dotnet">
           <h1>We are '.NET' developers, and we couldn't create this page.</h1>
           <div className="dotnet_image-container"><img className="dotnet_image" src={dotnet} alt="" /></div>
        </main>
    )
}