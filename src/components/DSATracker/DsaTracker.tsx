// import {useEffect, useState} from 'react';
import {indexDbInit} from '../../service/database';
import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import DbContext from '../../store/db-context';

function DSATracker() {
  // const [isInitDb, setIsInitDb] = useState(false);
  // function initializeDatabase(): void {
  //   const isInit = indexDbInit();
  //   console.log(isInit);
  //   // setIsInitDb(isInit);
  // }
  const db = indexDbInit();

  return (
    <div className="App">
      <h1>450 DSA Tracker</h1>
      <DbContext.Provider value={db}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DbContext.Provider>
    </div>
  );
}


export default DSATracker;
