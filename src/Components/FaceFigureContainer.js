import React from 'react';
import FaceFigure from './FaceFigure';

//receving data array through props and rendreing array of FaceFigure components 
const FaceFigureContainer = (props) => {
  return (
    <section className='pt6'>
      { props.cats.map(
        ({id, name, email}) => 
        (<FaceFigure 
        key={id} 
        id={id}
        name={name} 
        email={email} 
        />))
      }
    </section>
  );
}
  
  
  
  export default FaceFigureContainer;