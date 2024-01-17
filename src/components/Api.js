"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/');
                setCharacters(response.data.results);
                setFilteredCharacters(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = characters.filter((character) =>
            character.name.toLowerCase().includes(term)
        );

        setFilteredCharacters(filtered);
    };

    return (
        <section className='section-sec h-auto min-h-screen' id='section-sec'>
            <h1 className='title'>Star Wars Characters</h1>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />

            <ul>
                {filteredCharacters.map((character) => (
                    <li key={character.name} className='text-white'>
                        {character.name}
                    </li>
                ))}
            </ul>

        </section>
    );
};

export default Api;