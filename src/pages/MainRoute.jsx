import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Moviedetails from './Moviedetails';
import Popular from './Popular';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Moviedetails />} />
      <Route path="/au" element={<Popular />} />
    </Routes>
  );
};
export default MainRoute;
