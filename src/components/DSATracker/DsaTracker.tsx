// import {useEffect, useState} from 'react';
import {getAllData} from '../../service/database';
import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import {TopicSet} from '../../models/TopicSet';
import {useState} from 'react';

function DSATracker() {
  const [hasData, setHasData] = useState(false);
  getAllData().then((data: TopicSet[]) => {
    console.log(data);
    setHasData(true);
  });
  return (
    <div className="App">
      <h1>450 DSA Tracker</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}


export default DSATracker;
