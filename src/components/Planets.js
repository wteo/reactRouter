import React from 'react';

import Planet from './Planet';

import mercury from '../images/mercury.png';
import venus from '../images/venus.png';
import earth from '../images/earth.png';
import mars from '../images/mars.png';
import jupiter from '../images/jupiter.png';

function Planets(props) {
    return (
        <>
            <Planet planet='mercury' orbit='mercury-orbit' imgLink={mercury} />
            <Planet planet='venus' orbit='venus-orbit' imgLink={venus} />
            <Planet planet='earth' orbit='earth-orbit' imgLink={earth} />
            <Planet planet='mars' orbit='mars-orbit' imgLink={mars}/>
            <Planet planet='jupiter' orbit='jupiter-orbit' imgLink={jupiter}/>
        </>
    );
}

export default Planets;