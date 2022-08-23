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

function Planets(props) {
    return (
        <>
            <Planet planet='mercury' orbit='mercury-orbit' imgLink={mercury} />
            <Planet planet='venus' orbit='venus-orbit' imgLink={venus} />
            <Planet planet='earth' orbit='earth-orbit' imgLink={earth} />
            <Planet planet='mars' orbit='mars-orbit' imgLink={mars}/>
            <div className='orbit' id='asteroid-belt'></div>
            <Planet planet='jupiter' orbit='jupiter-orbit' imgLink={jupiter}/>
            <Planet planet='saturn' orbit='saturn-orbit' imgLink={saturn}/>
            <Planet planet='uranus' orbit='uranus-orbit' imgLink={uranus}/>
            <Planet planet='neptune' orbit='neptune-orbit' imgLink={neptune}/>
        </>
    );
}

export default Planets;