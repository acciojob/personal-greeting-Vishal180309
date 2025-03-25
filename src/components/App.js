import React, { useState } from 'react';

function PersonalizedGreeting() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        setGreeting(newName ? `Hello, ${newName}!` : '');
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
