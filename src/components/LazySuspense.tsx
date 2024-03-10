//REACT
import { Suspense } from 'react';
//COMPONENTS
import Loader from './Loader';

interface LazySuspenseProp {
  children: React.ReactNode;
}

export default function LazySuspense({ children }: LazySuspenseProp): JSX.Element {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
