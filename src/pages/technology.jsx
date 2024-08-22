import { useContext, useState } from "react";
import "../styles/technology.scss";
import Navbar from "../components/navbar";
import { DataContext } from "../components/context.jsx";

export default function Technology() {
    const [openIndex, setOpenIndex] = useState(0);
    const { technology } = useContext(DataContext);

    const handleClick = (index) => {
        setOpenIndex(index);
    };

   
    if (!technology || technology.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <main className="technology-container">
                <Navbar />
                <div className="body-contain">
                    <h3><span>03</span> Space launch 101</h3>
                    <div className="content-2">
                        <div className="circle-content">
                            <div className="leave-gap">
                                {technology.map((_, index) => (
                                    <div
                                        key={index}
                                        className={index === openIndex ? "circle circle-white" : "circle"}
                                        onClick={() => handleClick(index)}
                                    >
                                        {index + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="technology-content">
                                <h2>The terminology...</h2>
                                <h1>{technology[openIndex].name}</h1>
                                <p>{technology[openIndex].description}</p>
                            </div>
                        </div>
                        <div className="img-contain">
                            <picture>
                                <source 
                                    srcSet={technology[openIndex].images.portrait} 
                                    media="(min-width: 1024px)" 
                                />
                                <source 
                                    srcSet={technology[openIndex].images.landscape}
                                    media="(min-width: 300px)" 
                                />
                                <img 
                                    src={technology[openIndex].images.portrait}  
                                    alt={technology[openIndex].name} 
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
