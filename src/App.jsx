import { SearchParamsProvider } from './context/SearchParamsContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectProvider } from './context/ProtectProvider';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CityProvider } from './context/CityContext';
import { lazy, Suspense } from 'react';

import CitiesList from './components/CitiesList';
import CountriesList from './components/CountriesList';
import Form from './components/Form';
import City from './components/City';
import Spinner from './components/Spinner';

// import Homepage from './pages/Homepage';
// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

export default function App() {
  return (
    <CityProvider>
      <AuthProvider>
        <SearchParamsProvider>
          <BrowserRouter>
            <Suspense fullback={<Spinner />}>
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
            </Suspense>
          </BrowserRouter>
        </SearchParamsProvider>
      </AuthProvider>
    </CityProvider>
  );
}
