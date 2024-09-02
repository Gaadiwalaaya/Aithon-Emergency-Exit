import React, { useState } from 'react';
import axios from 'axios';

function Portfolio() {
    const [stock, setStock] = useState('');
    const [portfolio, setPortfolio] = useState([]);

    const addStockToPortfolio = async () => {
        try {
            await axios.post('/portfolio', { userId: 'user_id', stock });
            setPortfolio([...portfolio, stock]);
            setStock('');
        } catch (error) {
            console.error('Error adding stock to portfolio', error);
        }
    };

    return (
        <div>
            <h2>Portfolio Tracker</h2>
            <input
                type="text"
                placeholder="Add stock symbol"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
            <button onClick={addStockToPortfolio}>Add to Portfolio</button>
            <ul>
                {portfolio.map((stock, index) => (
                    <li key={index}>{stock}</li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;
