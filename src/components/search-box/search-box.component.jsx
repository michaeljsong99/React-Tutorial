import React from 'react';
import './search-box.styles.css';

// Functional components do not have access to the State, or Life Cycle methods.
export const SearchBox = ({placeholder, handleChange}) => (
    <input
    className='search' 
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}
    />
);