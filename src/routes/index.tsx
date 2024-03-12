//REACT-ROUTER-DOM
import { createBrowserRouter } from 'react-router-dom';
//PAGES
import {
  //Layout
  Home,
  Error,
  //AuthLayout
  Signin,
  Dashboard,
  MessageSender,
} from '../pages';
//COMPONENTS
import LazySuspense from '../components/LazySuspense';
import DrawarLayout from '../components/layouts/DrawarLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DrawarLayout />,
    children: [
      {
        path: '/',
        element: <LazySuspense children={<Home />} />,
      },
      {
        path: '/dasboard',
        element: <LazySuspense children={<Dashboard />} />,
      },
      {
        path: '/whatsapp',
        element: <LazySuspense children={<MessageSender name="WhatsApp sender" />} />,
      },
      {
        path: '/mobile',
        element: <LazySuspense children={<MessageSender name="Mobile sender" />} />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Signin />,
    // children: [{ path: 'signin', element: <LazySuspense children={<Signin />} /> }],
  },
  {
    path: '*',
    element: <LazySuspense children={<Error />} />,
  },
]);
