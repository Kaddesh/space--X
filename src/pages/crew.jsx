import { useContext, useState } from "react";
import Navbar from "../components/navbar";
import "../styles/crew.scss";
import { DataContext } from "../components/context.jsx";
import { useSwipeable } from 'react-swipeable';

export default function Crew() {
    const [ifIndex, setIfIndex] = useState(0);
    const { crew } = useContext(DataContext);

    const handleDotClick = (index) => {
        setIfIndex(index);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setIfIndex((prevIndex) => (prevIndex + 1) % crew.length);
        },
        onSwipedRight: () => {
            setIfIndex((prevIndex) => (prevIndex - 1 + crew.length) % crew.length);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    if (!crew || crew.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <main className='crew-container' {...handlers}>
                <Navbar />
                <div className="body-container">
                    <div className="content">
                        <h3><span>02</span>Meet your crew</h3>
                        <div className="details">
                            <h2>{crew[ifIndex].role}</h2>
                            <h1>{crew[ifIndex].name}</h1>
                            <p>{crew[ifIndex].bio}</p>
                        </div>

                        <div className="pagination-dots">
                            {crew.map((_, index) => (
                                <span
                                    key={index}
                                    className={index === ifIndex ? "dot onActive" : "dot"}
                                    onClick={() => handleDotClick(index)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="imgg-container">
                        <img src={crew[ifIndex]?.images?.png} alt={`Image of ${crew[ifIndex]?.name}`} />
                    </div>
                </div> 
            </main>
        </section>
    );
}
