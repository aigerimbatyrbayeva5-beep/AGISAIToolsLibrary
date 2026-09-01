import { createBrowserRouter, redirect } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import ExplorePage from '../pages/ExplorePage';
import ToolDetailPage from '../pages/ToolDetailPage';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/en'),
  },
  {
    path: '/:lang',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'explore', Component: ExplorePage },
      { path: 'tool/:toolId', Component: ToolDetailPage },
      { path: 'about', Component: AboutPage },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '*',
    loader: () => redirect('/en'),
  },
]);
