import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/todo' replace />,
    errorElement: <NotFound />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
