import { useState } from 'react';

import styles from './App.module.css';

import earth from './images/earth.png'

function App() {

  const [isClicked, setIsClicked] = useState(null);

  const clickHandler = () => {
    setIsClicked((value) => !value);
    console.log(isClicked);
  };

  const description = (
          <div className={styles.description}>
            <p>Earth</p>
          </div>
          );

  return (
    <div className={styles.solarSystemContainer}>
      <p>The Solar System</p>
      <div className={styles.orbit}>
        <div className={styles.planet}>
          <img onClick={clickHandler} src={earth} alt="earth" />
        </div>
      </div>
      {isClicked && description}
    </div>
  );
}

export default App;
