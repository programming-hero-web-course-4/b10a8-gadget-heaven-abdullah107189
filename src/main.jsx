import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainLayout/Main';
import Home from './Pages/Home/Home';
import Statistics from './Pages/Statistics/Statistics';
import Dashboard from './Pages/Dashboard/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/categories.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
