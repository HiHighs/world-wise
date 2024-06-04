import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout';
import Login from './Pages/Login';
import City from './components/City/City';
import CityList from './components/City/CityList';
import CountryList from './components/Country/CountryList';
import Form from './components/Form/Form';

const URL = 'http://localhost:9000';

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const data = await fetch(`${URL}/cities`).then((data) => data.json());
        setCities(data);
      } catch {
        alert('There was an error loading the data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path='cities'
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path='cities/:id' element={<City />} />
          <Route
            path='countries'
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
