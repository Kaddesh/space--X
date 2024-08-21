import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/desti.scss";

const content = [
    {
        img: "/public/assets/destination/image-moon.webp",
        location: "Moon",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        time: "3 days",
    },
    {
        img: "/public/assets/destination/image-mars.png",
        location: "Mars",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        time: "9 months",
    },
    {
        img: "/public/assets/destination/image-europa.png",
        location: "Europa",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        time: "3 years",
    },
    {
        img: "/public/assets/destination/image-titan.png",
        location: "Titan",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        time: "7 years",
    },
];

const buttons = ["Moon", "Mars", "Europa", "Titan"];

export default function Destination() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index);
    };

    return (
        <section id="destination">
            <main className="desti-container">
                <Navbar />
                <div className="content-map">
                    <div className=" fr-1">
                    <h3><span>01</span>PICK YOUR DESTINATION</h3>
                    <img src={content[openIndex].img} alt="" /> 
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
                        <h2>{content[openIndex].location}</h2>
                        <p className="description">{content[openIndex].description}</p>
                        <hr />
                        <div className="distance-travel">
                        <div>
                        <p>Avg. distance</p>
                        <h1>{content[openIndex].distance}</h1>
                        </div>
                        <div>
                        <p>Est. travel time</p>
                        <h1>{content[openIndex].time}</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </main>
        </section>
    );
}
