import { Navigate, useRoutes } from 'react-router-dom';
import OwnNotFound from '../Pages/OwnNotFound/OwnNotFound';
import Home from '../Components/Home/Home';
import OwnLayout from '../Pages/OwnLayout/OwnLayout';
import LogIn from '../Pages/auth/LogIn/LogIn';
import { getStoredToken } from '../services/user-storage';
import ForgotPassword from '../Pages/auth/forgot-password/ForgotPassword';
import SignUp from '../Pages/auth/SignUp/SignUp';
import Contact from '../Components/Contact/Contact';
import Profile from '../Components/Profile/Profile';
import Calories from '../Components/Calories/Calories';
import AboutUs from '../Components/AboutUs/AboutUs';
import Articles from '../Components/Blogs/Articles';
import BlogsDetails from '../Components/Blogs/BlogsDetails/BlogsDetails';
import Bmi from '../Components/Bmi/Bmi';
import Activities from '../Components/Activities/Activities';
import { ITranslation } from '../types';
import Admin from '../Pages/Admin/Admin';;
import Sports from '../Components/Activities/Sports/Sports';
import Exercises from '../Components/Activities/Exercises/Exercises';
import Goal from '../Components/Activities/Gole/Goal';
import ExercisesDetails from '../Components/Activities/Exercises/ExercisesDetails/ExercisesDetails';

const RoutesWrapper = ({ t }: ITranslation) => {
  const routes = useRoutes([
    {
      path: '*',
      element: <OwnNotFound t={t} />
    },
    {
      path: '/',
      element: <OwnLayout t={t} />,
      children: [
        {
          index: true,
          element: <Home t={t} />
        },
        {
          path: 'about',
          element: <AboutUs t={t} />
        },
        {
          path: 'contact',
          element: <Contact t={t} />
        },
        {
          path: 'articles',
          element:
            getStoredToken() ?
              <Articles t={t} />
            : <Navigate to='/login' replace />
        },
        {
          path: 'articles/:id',
          element: <BlogsDetails t={t} />
        },
        {
          path: 'calories',
          element:
            getStoredToken() ?
              <Calories t={t} />
            : <Navigate to='/login' replace />
        },
        {
          path: 'bmi',
          element:
            getStoredToken() ?
              <Bmi t={t} />
            : <Navigate to='/login' replace />
        },
        {
          path: 'activities',
          element:
            getStoredToken() ?
              <Activities t={t} />
            : <Navigate to='/login' replace />,
          children: [
            {
              index: true,
              element: <Goal t={t} />
            },
            {
              path: 'sports',
              element: <Sports t={t} />
            },
            {
              path: 'exercises',
              element: <Exercises t={t} />
            },
            {
              path: 'exercises/:id',
              element: <ExercisesDetails t={t} />
            }
          ]
        },
        {
          path: 'profile',
          element: <Profile t={t} />
        },
        {
          path: 'admin',
          element: <Admin t={t} />
        },
        {
          path: '/login',
          element: <LogIn t={t} />
        },
        {
          path: '/forgot-password',
          element: <ForgotPassword t={t} />
        },
        {
          path: '/register',
          element: <SignUp t={t} />
        }
      ]
    }
  ]);
  return routes;
};

export default RoutesWrapper;
