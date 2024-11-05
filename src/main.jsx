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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails';
import { CartProvider } from './Provider/CartContext';
import CartSection from './Components/CartSection/CartSection';
import WishlistSection from './Components/WishlistSection/WishlistSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
                path: '/',
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
        element: <Statistics></Statistics>,
        loader: () => fetch('/products.json'),
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart-section',
            element: <CartSection></CartSection>
          },
          {
            path: 'wishlist-section',
            element: <WishlistSection></WishlistSection>
          }
        ]
      },
      {
        path: '/productDetails/:id',
        element: <ProductsDetails></ProductsDetails>,
        loader: () => fetch('/products.json'),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  </StrictMode>,
)
