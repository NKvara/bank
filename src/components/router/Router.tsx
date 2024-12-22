import { lazy, Suspense } from 'react';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from '~/components/auth/AuthProvider';
import TransferScreen from '~/components/screens/Transfer';
import Temp from '~/components/screens/Transfer/temp';
import Loading from '~/components/shared/Loading';
import Navbar from '~/components/shared/Navbar';

const HomeScreen = lazy(() => import('~/components/screens/Home/Index'));
const ProtectedScreen = lazy(() => import('~/components/screens/Protected'));
const LoginScreen = lazy(() => import('~/components/screens/Login'));
const NotFoundScreen = lazy(() => import('~/components/screens/NotFound'));

function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: (
            <Navbar>
              <HomeScreen />
            </Navbar>
          ),
        },
        {
          path: '/transfer',
          element: (
            <Navbar>
              <TransferScreen />
            </Navbar>
          ),
        },
        {
          path: '/transactions',
          element: (
            <Navbar>
              <div>a</div>
            </Navbar>
          ),
        },
        {
          path: '/accounts-cards',
          element: (
            <Navbar>
              <div>a</div>
            </Navbar>
          ),
        },
        {
          path: '/investments',
          element: (
            <Navbar>
              <div>a</div>
            </Navbar>
          ),
        },
        {
          path: '/settings',
          element: (
            <Navbar>
              <div>a</div>
            </Navbar>
          ),
        },
        {
          path: '/protected',
          element: (
            <RequireAuth>
              <ProtectedScreen />
            </RequireAuth>
          ),
        },
        {
            path: ':rikardo',
            element: <Temp />,
        },
        {
          path: '/login',
          element: <LoginScreen />,
        },
        {
          path: '*',
          element: <NotFoundScreen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default function Router() {
  return (
    <BrowserRouter basename="/bank">
      <Routes />
    </BrowserRouter>
  );
}
