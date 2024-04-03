/* eslint-disable import/no-unresolved */
import { lazy, Suspense, useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from 'src/auth/auth';
import DashboardLayout from 'src/layouts/dashboard';
import { UserContext } from 'src/context/user.context';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
// eslint-disable-next-line import/no-unresolved
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const { user, setUser } = useContext(UserContext);
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <AuthLayout authenticated={user} />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
