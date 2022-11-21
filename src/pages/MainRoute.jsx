import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Moviedetails from './Moviedetails';
import Popular from './Popular';
import New from './New';
import { MovieContext } from './../context api/ContextProvider';
import { useContext } from 'react';
import Searchresults from './Searchresults';
const MainRoute = () => {
  const { country } = useContext(MovieContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path={`/${country?.country_code?.toLowerCase()}/:title/:id`}
        element={<Moviedetails />}
      />
      <Route
        path={`/${country?.country_code?.toLowerCase()}/tv-show/:title/:id`}
        element={<Moviedetails />}
      />
      <Route
        path={`/${country?.country_code?.toLowerCase()}/movies/:title/:id`}
        element={<Moviedetails />}
      />
      <Route
        path={`/${country?.country_code?.toLowerCase()}`}
        element={<Popular />}
      />
      <Route
        path={`/${country?.country_code?.toLowerCase()}/movies`}
        element={<Popular />}
      />
      <Route
        path={`/${country?.country_code?.toLowerCase()}/tv-show`}
        element={<Popular />}
      />
      <Route path="/new" element={<New />} />
      <Route path="/query/:title" element={<Searchresults />} />
    </Routes>
  );
};
export default MainRoute;
