import { Route, Routes } from 'react-router-dom';
import { AppRoutes, IRoute } from '@/router/routes';

import Layout from '@/router/Layout';

export default function App() {
  return (
    <Routes>
      {Object.values(AppRoutes).map(({ Component, path }: IRoute) => (
        <Route key={path} element={<Layout />}>
          <Route path={path} element={<Component />} />М
        </Route>
      ))}
    </Routes>
  );
}
