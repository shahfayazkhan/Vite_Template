//REACT
import { FC, lazy } from 'react';

export const Home: FC = lazy(() => import('./Home'));
export const Error: FC = lazy(() => import('./Error'));
export const Signin: FC = lazy(() => import('./Signin'));
export const Dashboard: FC = lazy(() => import('./Dashboard'));
export const MessageSender: FC<{ name: string }> = lazy(() => import('./MessageSender'));
