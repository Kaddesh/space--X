import { useState, useContext } from "react";
import Navbar from "../components/navbar";
import "../styles/desti.scss";
import { DataContext }  from "../components/context.jsx"

const buttons = ["Moon", "Mars", "Europa", "Titan"];

export default function Destination() {
    const [openIndex, setOpenIndex] = useState(0);
    const { destinations } = useContext(DataContext); 

    const handleToggle = (index) => {
        setOpenIndex(index);
    };

    return (
        <section id="destination">
            <main className="desti-container">
                <Navbar />
                <h3><span>01</span>PICK YOUR DESTINATION</h3>
                <div className="content-map">
                    <div className="fr-1">
                        <img src={destinations[openIndex].images.png} alt={destinations[openIndex].name} /> 
                    </div>
                    <div className="fr-2">
                        <div className="btn">
                            {buttons.map((buttonLabel, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleToggle(index)}
                                    className={index === openIndex ? "active" : ""}
                                >
                                    {buttonLabel}
                                </button>
                            ))}
                        </div>

                        <div className="details-class">
                            <h2>{destinations[openIndex].name}</h2>
                            <p className="description">{destinations[openIndex].description}</p>
                            <hr />
                            <div className="distance-travel">
                                <div>
                                    <p>Avg. distance</p>
                                    <h1>{destinations[openIndex].distance}</h1>
                                </div>
                                <div>
                                    <p>Est. travel time</p>
                                    <h1>{destinations[openIndex].travel}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
