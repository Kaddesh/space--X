import { useState } from "react";
import "../styles/technology.scss";
import Navbar from "../components/navbar";

const list = [
    {
        type: "The terminology...",
        content: "Launch Vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imgLarge: "../assets/technology/image-launch-vehicle-portrait.jpg", 
        imgMedium: "../assets/technology/image-launch-vehicle-landscape.jpg",
      },
      {
        type: "The terminology...",
        content: "Spaceport",
        description: " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imgLarge: "../assets/technology/image-spaceport-portrait.jpg", 
        imgMedium: "../assets/technology/image-spaceport-landscape.jpg",
      },
      {
        type: "The terminology...",
        content: "Space capsule",
        description: " A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imgLarge: "../assets/technology/image-space-capsule-portrait.jpg", 
        imgMedium: "../assets/technology/image-space-capsule-landscape.jpg",
      },
];

export default function Technology() {
    const [ifIndex, setIfIndex] = useState(0);

    const handleClick = (index) => {
        setIfIndex(index);
    };

    return (
        <section>
            <main className="technology-container">
                <Navbar />
                <div className="body-contain">
                    <h3><span>03</span> Space launch 101</h3>
                    <div className="content-2">
                        <div className="circle-content">
                            <div className="leave-gap">
                                {list.map((_, index) => (
                                    <div
                                        key={index}
                                        className={index === ifIndex ? "circle circle-white" : "circle"}
                                        onClick={() => handleClick(index)}
                                    >
                                        {index + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="technology-content">
                                <h2>{list[ifIndex].type}</h2>
                                <h1>{list[ifIndex].content}</h1>
                                <p>{list[ifIndex].description}</p>
                            </div>
                        </div>
                        <div className="img-contain">
                        <picture>
                        <source 
                        srcSet={list[ifIndex].imgLarge} 
                        media="(min-width: 1024px)" 
                        />
                        <source 
                        srcSet={list[ifIndex].imgMedium} 
                        media="(min-width: 300px)" 
                        />
                        <img 
                        src={list[ifIndex].imgLarge} 
                        alt={list[ifIndex].content} 
                        />
                    </picture>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
