// import {useEffect, useState} from 'react';
import {indexDbInit} from '../../service/database';
import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

function DSATracker() {
  // const [isInitDb, setIsInitDb] = useState(false);
  // function initializeDatabase(): void {
  //   const isInit = indexDbInit();
  //   console.log(isInit);
  //   // setIsInitDb(isInit);
  // }
  indexDbInit();
  return (
    <div className="App">
      <h1>450 DSA Tracker</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}


export default DSATracker;
