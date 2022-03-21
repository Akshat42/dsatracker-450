import './App.css';
import DSATracker from './components/DSATracker/DsaTracker';
import {getDBPointer} from './service/database';

function App() {
  const db = getDBPointer();
  db.config.debug = false;
  return (
    <DSATracker />
  );
}

export default App;
