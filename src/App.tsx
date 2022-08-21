import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

import Layout from 'components/Layout';

import MyDashboard from 'pages/MyDashboard';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

import { tokenState } from 'stores/UserStore';
import Toast from 'components/Toast';

function App() {
  const token = useRecoilValue(tokenState);

  return (
    <ThemeProvider theme={{}}>
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
