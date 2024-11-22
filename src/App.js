import { useState } from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./pages/layout";
import Register from "./pages/register"
import { path } from "framer-motion/client";
import About from "./pages/about";
import Resume from "./pages/resumes";
import Forum from "./pages/forums";
import News from "./pages/News,js";



const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/Forums",
        element: <Forum />
      },
      {
        path: "/News",
        element: <News />
      },
      {
        path: "/Find Resumes",
        element: <Resume />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }

]);

export default App;