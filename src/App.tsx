import './App.css';
import DSATracker from './components/DSATracker/DsaTracker';
import {getDBPointer, indexDbInit} from './service/database';

function App() {
  const db = getDBPointer();
  indexDbInit();
  db.config.debug = false;
  return (
    <DSATracker />
  );
}

export default App;
