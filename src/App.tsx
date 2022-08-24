import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

import Layout from 'components/Layout';
import Toast from 'components/Toast';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

import { isDarkModeState, tokenState } from 'stores/UserStore';

import { light } from 'styles/themes';

function App() {
  const token = useRecoilValue(tokenState);
  const isDarkMode = useRecoilValue(isDarkModeState);

  return (
    <ThemeProvider theme={{ ...light }}>
      <GlobalStyles isAuthenticated={Boolean(token)} />
      <Toast toastOptions={{}} />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={token ? <Dashboard /> : <Login />} path={routes.HOME} />
            <Route element={<NotFound />} path={'*'} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
