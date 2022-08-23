import React from 'react';

import Planet from './Planet';

import mercury from '../images/mercury.png';
import venus from '../images/venus.png';
import earth from '../images/earth.png';
import mars from '../images/mars.png';
import jupiter from '../images/jupiter.png';
import saturn from '../images/saturn.png';
import uranus from '../images/uranus.png';
import neptune from '../images/neptune.png';

const planets = {
    mercury: {
        planet: 'mercury',
        description: 'The smallest planet in the Solar System and the closest to the Sun',
        orbitId: 'mercury-orbit',
        imageLink: mercury
    }, 
    venus: {
        planet: 'venus',
        description: 'Known as the yellow planet. Venus has a poisonous atmosphere full of sulphur.',
        orbitId: 'venus-orbit',
        imageLink: venus
    }, 
    earth: {
        planet: 'earth',
        description: 'Our home!',
        orbitId: 'earth-orbit',
        imageLink: earth
    }, 
    mars: {
        planet: 'mars',
        description: 'The Red planet!',
        orbitId: 'mars-orbit',
        imageLink: mars
    },
    jupiter: {
        planet: 'jupiter',
        description: 'The largest planet in the Solar System.',
        orbitId: 'jupiter-orbit',
        imageLink: jupiter
    }, 
    saturn: {
        planet: 'saturn',
        description: 'The second largest planet in the Solar System. Famous for its ice rings orbiting around the planet.',
        orbitId: 'saturn-orbit',
        imageLink: saturn
    },
    uranus: {
        planet: 'uranus',
        description: 'Uranus is a weird planet. Instead of rotating vertically like other planets, Uranus rotates on its side.',
        orbitId: 'uranus-orbit',
        imageLink: uranus
    },
    neptune: {
        planet: 'neptune',
        description: 'The planet furthest from the sun.',
        orbitId: 'neptune-orbit',
        imageLink: neptune
    }
}

function Planets(props) {

    return (
        <>
            <Planet 
                description={planets.mercury.description} 
                planet={planets.mercury.planet} 
                orbit={planets.mercury.orbitId} 
                imgLink={planets.mercury.imageLink} 
            />
            <Planet 
                description={planets.venus.description} 
                planet={planets.venus.planet} 
                orbit={planets.venus.orbitId} 
                imgLink={planets.venus.imageLink} 
            />
            <Planet 
                description={planets.earth.description} 
                planet={planets.earth.planet} 
                orbit={planets.earth.orbitId} 
                imgLink={planets.earth.imageLink} 
            />
            <Planet 
                description={planets.mars.description} 
                planet={planets.mars.planet} 
                orbit={planets.mars.orbitId} 
                imgLink={planets.mars.imageLink} 
            />
            <div className='orbit' id='asteroid-belt'></div>
            <Planet 
                description={planets.jupiter.description} 
                planet={planets.jupiter.planet} 
                orbit={planets.jupiter.orbitId} 
                imgLink={planets.jupiter.imageLink} 
            />
            <Planet 
                description={planets.saturn.description} 
                planet={planets.saturn.planet} 
                orbit={planets.saturn.orbitId} 
                imgLink={planets.saturn.imageLink} 
            />
            <Planet 
                description={planets.uranus.description} 
                planet={planets.uranus.planet} 
                orbit={planets.uranus.orbitId} 
                imgLink={planets.uranus.imageLink} 
            />
            <Planet 
                description={planets.neptune.description} 
                planet={planets.neptune.planet} 
                orbit={planets.neptune.orbitId} 
                imgLink={planets.neptune.imageLink} 
            />
        </>
    );
}

export default Planets;