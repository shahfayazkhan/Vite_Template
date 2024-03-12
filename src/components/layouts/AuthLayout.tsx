//REACT-ROUTER-DOM
import { Outlet } from 'react-router-dom';

export default function AuthLayout(): JSX.Element {
  return (
    <>
      {' '}
      AuthLayout <Outlet />{' '}
    </>
  );
}
