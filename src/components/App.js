import React, { useState } from 'react';

function PersonalizedGreeting() {
    const [name, setName] = useState('');
    const greeting = name ? `Hello, ${name}!` : '';

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
            />
            <p>{greeting}</p>
        </div>
    );
}

export default PersonalizedGreeting;
