import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

// import Layout from 'components/Layout';
import { SplashScreen } from 'components/SplashScreen';
import Toast from 'components/Toast';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

import { isDarkModeState, tokenState } from 'stores/UserStore';

import { light } from 'styles/themes';

const Layout = lazy(() => import('components/Layout'));

function App() {
  const token = useRecoilValue(tokenState);
  const isDarkMode = useRecoilValue(isDarkModeState);

  const renderRoutes = () => {
    if (!token) return <Route element={<Login />} path={routes.HOME} />;

    return (
      <Route
        element={
          <Suspense fallback={<SplashScreen />}>
            <Layout />
          </Suspense>
        }
      >
        <Route element={<Dashboard />} path={routes.HOME} />

        <Route element={<NotFound />} path={'*'} />
      </Route>
    );
  };

  return (
    <ThemeProvider theme={{ ...light }}>
      <GlobalStyles isAuthenticated={Boolean(token)} />
      <Toast toastOptions={{}} />
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
