import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import CitiesList from './components/CitiesList';
import CountriesList from './components/CountriesList';
import Form from './components/Form';
import { CityProvider } from './context/CityContext';
import City from './components/City';
import { SearchParamsProvider } from './context/SearchParamsContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectProvider } from './context/ProtectProvider';

export default function App() {
  return (
    <CityProvider>
      <AuthProvider>
        <SearchParamsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectProvider>
                    <AppLayout />
                  </ProtectProvider>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CitiesList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountriesList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </SearchParamsProvider>
      </AuthProvider>
    </CityProvider>
  );
}
