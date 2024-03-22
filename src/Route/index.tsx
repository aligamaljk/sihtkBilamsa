
import { Navigate, useRoutes } from 'react-router-dom';
import OwnNotFound from '../Pages/OwnNotFound/OwnNotFound';
import Home from '../Components/Home/Home';
import OwnLayout from '../Components/Header/OwnLayout';
import LogIn from '../Pages/auth/LogIn/LogIn';
import { getStoredUser } from '../services/user-storage';

const RoutesWrapper = ({ t }: { t: any }) => {
  const routes = useRoutes([
    {
      path: '*',
      element: <OwnNotFound t={t} />,
    },
    {
      path: '/',
      element: <OwnLayout t={t} />,
      children: [
        {
          index: true,
          element: <Home t={t} />,
        },
        {
          path: 'product',
          element: getStoredUser() ? (
            <h1>{t.product}</h1>
          ) : (
            <Navigate to="/login" replace />
          ),
        },
        {
          path: 'cart',
          element: <h1>{t.cart}</h1>,
        },
      ],
    },
    {
      path: '/login',
      element: <LogIn t={t} />,
    },
    {
      path: '/register',
      element: <div>register</div>,
    },
  ]);
  return routes;
};

export default RoutesWrapper;
