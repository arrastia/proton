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

import { dark, light } from 'styles/themes';

const Layout = lazy(() => import('components/Layout'));

function App() {
  const token = useRecoilValue(tokenState);
  const isDarkMode = useRecoilValue(isDarkModeState);

  const renderRoutes = () => {
    if (!token) return <Route element={<Login />} path={routes.DASHBOARD} />;

    const renderLayout = () => (
      <Suspense fallback={<SplashScreen />}>
        <Layout />
      </Suspense>
    );

    return (
      <Route element={renderLayout()}>
        <Route element={<Dashboard />} path={routes.DASHBOARD} />
        <Route element={<NotFound />} path={'*'} />
      </Route>
    );
  };

  return (
    <ThemeProvider theme={{ ...(!isDarkMode ? light : dark) }}>
      <GlobalStyles />
      <Toast toastOptions={{}} />
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
