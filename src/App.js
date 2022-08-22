import { useState } from 'react';

import styles from './App.module.css';

import earth from './images/earth.png'
import mars from './images/mars.png'

function App() {

  const [earthIsClicked, setEarthIsClicked] = useState(null);
  const [marsIsClicked, setMarsIsClicked] = useState(null);

  const earthClickHandler = () => {
    setEarthIsClicked((value) => !value);
  };

  const marsClickHandler = () => {
    setMarsIsClicked((value) => !value);
  };

  const earthDescription = (
          <div className={styles.description}>
            <p>Earth</p>
          </div>
          );
  
  const marsDescription = (
          <div className={styles.description}>
            <p>Mars</p>
          </div>
          );     

  return (
    <div className={styles.solarSystemContainer}>
      <p>The Solar System</p>
      {earthIsClicked && earthDescription}
      {marsIsClicked && marsDescription}
      <div id={styles.sun}>
      </div>
      <div className={styles.earthOrbit}>
        <div className={styles.earthPlanet}>
          <img onClick={earthClickHandler} src={earth} alt="earth" />
        </div>
      </div>
      <div className={styles.marsOrbit}>
        <div className={styles.marsPlanet}>
          <img onClick={marsClickHandler} src={mars} alt="mars" />
        </div>
      </div>
    </div>
  );
}

export default App;
