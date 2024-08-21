import { useState } from "react";
import Navbar from "../components/navbar"
import  "../styles/crew.scss"

const   crewItem = [
    {
        name: "Douglas Hurley",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        title: "Commander",
        img: "../assets/crew/image-douglas-hurley.png",
       
    },
    {
        name: " Mark Shuttleworth",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        title: "Mission Specialist",
        img: "../assets/crew/image-mark-shuttleworth.png",
      
    },
    {
        name: "Victor Glover",
        description: " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        title: "Pilot",
        img: "../assets/crew/image-victor-glover.png",
        
    },
    {
        name: " Anousheh Ansari",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        title: " Flight Engineer",
        img: "../assets/crew/image-anousheh-ansari.png",
       
    },
   
];

export default function Crew() {
    const [ifIndex, setifIndex] = useState(0);

  const handleDotClick = (index) => {
      setifIndex(index);
  };
  return (
    <section>
      <main className='crew-container'>
        <Navbar />
        <div className="body-container">
            <div className="content">
            <h3><span>02</span>Meet your crew</h3>
            <div className="details">
            <h2>{crewItem[ifIndex].title}</h2>
            <h1>{crewItem[ifIndex].name}</h1>
            <p>{crewItem[ifIndex].description}</p>
            </div>

            <div className="pagination-dots">
            {crewItem.map((_, index) => (
              <span
                  key={index}
                  className={index === ifIndex ? "dot onActive" : "dot"}
                  onClick={() => handleDotClick(index)}
              ></span>
            ))}
                    </div>
            </div>

            <div className="imgg-container">
                <img src={crewItem[ifIndex].img} alt="" />
            </div>
        </div> 
      </main>
    </section>
  )
}
