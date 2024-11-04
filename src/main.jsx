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
import Products from './Components/Products/Products';
import AllProductsByCategory from './Components/AllProductsByCategory/AllProductsByCategory';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('/categories.json'),
            element: <Products></Products>,
            children: [
              {
                path: '/allProducts',
                loader: () => fetch('/products.json'),
                element: <AllProductsByCategory></AllProductsByCategory>
              },
              {
                path: '/products/:category',
                loader: () => fetch('/products.json'),
                element: <AllProductsByCategory></AllProductsByCategory>
              },
            ]
          },


        ]
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
