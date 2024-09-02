import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState(null);

    const fetchStockPrice = async () => {
        try {
            const response = await axios.get(`/stock/${stock}`);
            setPrice(response.data);
        } catch (error) {
            console.error('Error fetching stock price', error);
        }
    };

    return (
        <div>
            <h1>Stock Market Portal</h1>
            <input
                type="text"
                placeholder="Enter stock symbol"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
            />
            <button onClick={fetchStockPrice}>Get Price</button>
            {price && <div>Stock Price: {price}</div>}
        </div>
    );
}

export default App;
