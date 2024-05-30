import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Product from './Pages/Product';
import Pricing from './Pages/Pricing';
import PageNotFound from './Pages/PageNotFound';
import AppLayout from './Pages/AppLayout';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route index element={<p>Home</p>} />
          <Route path='cities' element={<p>test</p>} />
          <Route path='countries' element={<p>Countries!!!!!!!!</p>} />
          <Route path='form' element={<p>FORMFORM!!!!!!!!</p>} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
