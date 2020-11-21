import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="tc margin-1">
            <input 
            type="search" 
            placeholder="Find A Bot!" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchChange}
            />           
        </div>
    )
}

export default SearchBox