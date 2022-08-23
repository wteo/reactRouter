import styles from './App.module.css';

import Planets from './components/Planets';

function App() {
   
  return (
    <div className={styles.solarSystemContainer}>
      <p>The Solar System</p>
      <div id={styles.sun} />
      <Planets />
    </div>
  );
}

export default App;
