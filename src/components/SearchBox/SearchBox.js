import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className={'flex pa'}>
            <input
                className={'search'}
                type="search"
                placeholder="search products"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
