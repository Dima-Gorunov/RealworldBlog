import HeaderContainer from '../components/Header/HeaderContainer';
import BodyContainer from '../components/Body/BodyContainer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <BodyContainer />
    </div>
  );
}

export default App;
