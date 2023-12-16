import {React,useEffect} from 'react';
import './App.css';

import { Counter } from './features/counter/Counter';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/Checkout';
import ProductDetail from './features/product-list/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';

import AdminOrdersPage from './pages/AdminOrdersPage'

import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';

import AdminHome from './pages/AdminHome'

import ProtectedAdmin from './features/auth/components/ProtectedAdmin'


import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';



import Protected from './features/auth/components/protected';//making protected route

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import {selectLoggedInUser} from '../src/features/auth/authSlice'
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccesPage from './pages/OrderSuccesPage';

import UserOrders from './features/user/components/UserOrder';
import UserOrdersPage from './pages/UserOrdersPage';

import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Home></Home>                                                     
          <Protected><Home></Home></Protected>
    ),
          
  },
  {
   path:'/admin',
   element: (
    <ProtectedAdmin>
      <AdminHome></AdminHome>
    </ProtectedAdmin>
  ),
  },

  {
    path: "/login",
    element: <LoginPage></LoginPage> ,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>  ,
  },
  { 
    path: "/cart",
    element: (
      // <CartPage></CartPage>
            <Protected> <CartPage></CartPage></Protected>
    ),
  },
  { 
    path: "/checkout",
    element:(
      // <CheckoutPage></CheckoutPage>
         <Protected> <CheckoutPage></CheckoutPage></Protected>
    ),
  },
  { 
    path: "/product-detail/:id",
    element:(
      // <ProductDetailPage></ProductDetailPage>
        <Protected> <ProductDetailPage></ProductDetailPage></Protected>
    ), 

  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },


  {
    path: '/orders',
    // element: (
    //   <UserOrdersPage></UserOrdersPage>
    //   // we will add Page later right now using component directly.
    // ),
      element: <UserOrdersPage></UserOrdersPage>,

  },
  {
     path:"/order-success/:id",
     element:(
      //  <Protected><OrderSuccesPage></OrderSuccesPage></Protected>
      <OrderSuccesPage></OrderSuccesPage>

     )
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },

  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  
  {
    path: '/profile',
    element: (
      <UserProfilePage></UserProfilePage>
      // we will add Page later right now using component directly.
    ),
  },
  
   

  { 
    path: "*",
    element: <PageNotFound></PageNotFound>,      
  },


]);




function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  },[dispatch, user])



  return (
    <>
       <div className="App">
        <RouterProvider router={router} />
  </div>
    </>
  );
}

export default App;
