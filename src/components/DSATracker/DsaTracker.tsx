import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import TopicPage from '../../pages/TopicPage/TopicPage';

function DSATracker() {
  return (
    <div className="App">
      <h1>450 DSA Tracker</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<TopicPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}


export default DSATracker;
