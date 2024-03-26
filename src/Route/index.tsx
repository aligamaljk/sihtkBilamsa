
import { Navigate, useRoutes } from 'react-router-dom';
import OwnNotFound from '../Pages/OwnNotFound/OwnNotFound';
import Home from '../Components/Home/Home';
import OwnLayout from '../Components/Header/OwnLayout';
import LogIn from '../Pages/auth/LogIn/LogIn';
import { getStoredUser } from '../services/user-storage';
import ForgotPassword from '../Pages/auth/forgot-password/ForgotPassword';
import SignUp from '../Pages/auth/SignUp/SignUp';
import Blogs from '../Components/Blogs/Blogs';
import Contact from '../Components/Contact/Contact';
import Profile from '../Components/Profile/Profile';
import Calories from '../Components/Calories/Calories';
import AboutUs from '../Components/AboutUs/AboutUs';

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
          path: 'about',
          element: <AboutUs t={t}/>,
        },
        {
          path: 'contact',
          element: <Contact t={t} />,
        },
        {
          path: 'articles',
          element: getStoredUser() ? (
            <Blogs t={t} />
          ) : (
            <Navigate to="/login" replace />
          ),
        },
        {
          path: 'calories',
          element: getStoredUser() ? <Calories t={t}/> : <Navigate to="/login" replace />,
        },
        {
          path: 'bmr',
          element: getStoredUser() ? <h1> bmr </h1> : <Navigate to="/login" replace />,
        },
        {
          path: 'profile',
          element: <Profile t={t} />,
        },
        {
          path: '/login',
          element: <LogIn t={t} />,
        },
        {
          path: '/forgot-password',
          element: <ForgotPassword t={t} />,
        },
        {
          path: '/register',
          element: <SignUp t={t} />,
        },
      ],
    },
  ]);
  return routes;
};

export default RoutesWrapper;
