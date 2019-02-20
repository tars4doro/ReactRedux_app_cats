import React from 'react';

//wrapping props.children inside nav
const NavBlock = (props) => {
        return (
        <nav 
            className='ts w-100'
            style={{ position: 'fixed', zIndex: '99' }}>
                { props.children }
        </nav>
        );
    };    

export default NavBlock;

