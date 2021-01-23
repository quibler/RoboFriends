import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;