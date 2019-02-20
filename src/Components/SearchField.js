import React from 'react';

//receving event listener through destructuring of props
const SearchField = ( {searchCat} ) => {
      return (
        <div className='mb3'>
            <input 
              className='tc w5 ba bw2 b--gold br4' 
              type='search' 
              placeholder='search for your pet'
              onChange={searchCat}>
            </input> {/*  ^^^ event handler*/}
        </div>
      );
    }  

export default SearchField;

