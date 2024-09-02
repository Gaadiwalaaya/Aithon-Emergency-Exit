import React, { useState } from 'react';

function Chatbot() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQuery = async () => {
        // Replace with API call to your chatbot server
        setResponse("Sample response from AI chatbot");
    };

    return (
        <div>
            <h2>Ask the AI Chatbot</h2>
            <input
                type="text"
                placeholder="Ask a question"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleQuery}>Ask</button>
            {response && <div>Response: {response}</div>}
        </div>
    );
}

export default Chatbot;
