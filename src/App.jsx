import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Layout from "./component/Layout";
import Contact from "./component/Contact";
import Listing from "./component/Listing";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Register from "./component/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB1EmQHuD2NOeRKxBfs97Ybl8T3ykew9yM",
  authDomain: "shopeasy-58842.firebaseapp.com",
  projectId: "shopeasy-58842",
  storageBucket: "shopeasy-58842.firebasestorage.app",
  messagingSenderId: "673872095062",
  appId: "1:673872095062:web:426c349f5c7df3ba3098f7",
  measurementId: "G-Y5JGNX0EXR"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/listing", element: <Listing /> },
        { path: "/listing/:category_slug", element: <Listing /> },
        { path: "/details/:product_id", element: <Details /> },
        { path: "/contact", element: <Contact /> },
        { path: "/cart", element: <Cart /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> }
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}
