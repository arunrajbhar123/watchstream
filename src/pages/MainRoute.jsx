import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Moviedetails from './Moviedetails';
import Popular from './Popular';
import New from './New';
import { MovieContext } from './../context api/ContextProvider';
import {useContext} from "react"
const MainRoute = () => {
  const { country } = useContext(MovieContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/${country}/:title/:id`} element={<Moviedetails />} />
      <Route path={`/${country}`} element={<Popular />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
};
export default MainRoute;
