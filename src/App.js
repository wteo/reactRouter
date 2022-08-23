import styles from './App.module.css';

import Planets from './components/Planets';

function App() {
   
  return (
    <>
      <h1>The Solar System</h1>
      <div className={styles.solarSystemContainer}>
        <div id={styles.sun} />
        <Planets />
      </div>
    </>
  );
}

export default App;
