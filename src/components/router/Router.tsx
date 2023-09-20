import { lazy, Suspense } from 'react';
import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from '~/components/auth/AuthProvider';
// import NavBar from '~/components/shared/Nav/NavBar';
import Loading from '~/components/shared/Loading';
import Navbar from '~/components/shared/Navbar';

const HomeScreen = lazy(() => import('~/components/screens/Home'));
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
          path: '/settings',
          element: (
            <Navbar>
              <HomeScreen />
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
