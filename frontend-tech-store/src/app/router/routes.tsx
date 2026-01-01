import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import { ProtectedRoute } from "./ProtectedRoute";
import ProductPage from "../../pages/ProductPage/ui/ProductPage";
import CartPage from "../../pages/Cart/ui/CartPage";
import RegistrationPage from "../../pages/RegistrationPage/ui/RegistrationPage";
import CheakoutPage from "../../pages/Cheakout/ui/CheakoutPage";
import LoginPage from "../../pages/LoginPage/ui/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ui/ProfilePage";
import Wishlist from "../../pages/ProfilePage/Wishlist/ui/Wishlist";
import ProfileLayout from "../layouts/ProfileLayout";
import Orders from "../../pages/ProfilePage/Orders/ui/Orders";
import Notifications from "../../pages/ProfilePage/Notifications/ui/Notifications";
// import { AuthLayout } from "../layouts/AuthLayout";
// import { ProtectedRoute } from "@/app/router/ProtectedRoute";
// import MainLayout from "../layouts/MainLayout";

// Ленивая загрузка
const HomePage = lazy(() => import("../../pages/HomePage/ui/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage/ui/AboutPage"));
const ShopPage = lazy(() => import("../../pages/ShopPage/ui/ShopPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage/ui/ContactPage"));
const FAQPage = lazy(() => import("../../pages/FAQPage/ui/FAQPage"));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/signup",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: (
          <LoginPage />
        ),
      },
      {
        path: "/cheakout",
        element: <CheakoutPage />,
      },
      {
        path: "/checkout",
        element: <CheakoutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/profile/",
            element: <ProfilePage />,
          },
          {
            path: "/profile/orders",
            element: <Orders />,
          },
          {
            path: "/profile/notifications",
            element: <Notifications />,
          },
          {
            path: "/profile/wishlist",
            element: <Wishlist />,
          },
        ],
       
      },
    
  
    ],
  }
];
