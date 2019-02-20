import React from 'react';

//destructuring props and rendering single block
const FaceFigure = ( {id, name, email} ) => {
      return (
        <figure className='pt4 pb3 pr2 pl2 br3 shadow-5 grow'>
        <img src={`https://robohash.org/set_set4/bgset_bg2/kitty_${id}?size=200x200`} alt="kitty"/>
        <figcaption className='truncate'>
          <strong>{name}</strong><br/> 
          <a href={`mailto:${email}`} className='hoverEmail no-underline underline-hover'>
            {email}
          </a>
        </figcaption>
        </figure>
      );
    }
    
  export default FaceFigure;