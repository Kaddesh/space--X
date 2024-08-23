import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 



export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [crew, setCrew] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('../../data.json'); 
                const data = await response.json();
                setCrew(data.crew);
                setDestinations(data.destinations);
                setTechnology(data.technology);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 

    return (
        <DataContext.Provider value={{ crew, destinations, technology }}>
            {children}
        </DataContext.Provider>
    );
};


DataProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
