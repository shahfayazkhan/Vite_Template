//REACT-ROUTER-DOM
import { createBrowserRouter } from 'react-router-dom';
import { Error, Home } from '../pages';
import LazySuspense from '../components/LazySuspense';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <LazySuspense children={<Error />} />,
  },
]);
