import React, { useState } from 'react';

import './Planets.css';

function Planet(props) {

    const [isClicked, setIsClicked] = useState(null);

    const clickHandler = () => {
        setIsClicked((value) => !value);
      };

    const description = (
        <div className='description'>
          <p>{props.planet}</p>
        </div>
        );


    return (
        <>
            { isClicked && description }
            <div id={props.orbit} className='orbit'>
                <div id={props.planet} className='planet'>
                <img className='planet-image' onClick={clickHandler} src={props.imgLink} alt={props.planet} />
                </div>
            </div>
        </>
    );
}

export default Planet;