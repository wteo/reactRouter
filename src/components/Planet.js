import React, { useState } from 'react';

import './Planets.css';

function Planet(props) {

    const [isClicked, setIsClicked] = useState(null);

    const clickHandler = () => {
        setIsClicked((value) => !value);
      };
    
    const closeHandler = () => {
        setIsClicked((value) => !value);
      };

    const description = (
        <>
            <button className='close-button' onClick={closeHandler}>X</button>
            <div className='description'>
                <h3>{`${props.planet.charAt(0).toUpperCase()}${props.planet.slice(1)}`}</h3>
                <p>{props.description}</p>
            </div>
        </>
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