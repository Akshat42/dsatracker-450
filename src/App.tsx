import './App.css';
import DSATracker from './components/DSATracker/DsaTracker';
import {getDBPointer} from './service/database';
import dsaArchive from './data/tracker';
import {useState} from 'react';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const db = getDBPointer();
  db.config.debug = false;
  initDb();

  async function initDb() {
    if (!window.indexedDB) {
      console.log('Your browser doesn\'t' +
      'support a stable version of IndexedDB');
      return null;
    }
    const data = await db.collection('archive').get();
    if (data.length === 0) {
      dsaArchive.forEach((ele) => {
        db.collection('archive')
            .add(ele, ele.id);
      });
      setDataLoaded(true);
    } else {
      setDataLoaded(true);
    }
  }
  if (dataLoaded) {
    return <DSATracker />;
  } else {
    return <p>Loading...</p>;
  }
}

export default App;
