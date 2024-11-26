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
import News from "./pages/News";
import Companies from "./pages/Companies";



const App = createBrowserRouter([
  {
    path: "/jobs-junction",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/jobs-junction/home",
        element: <Home />
      },
      {
        path: "/jobs-junction/about",
        element: <About />
      },
      {
        path: "/jobs-junction/Forums",
        element: <Forum />
      },
      {
        path: "/jobs-junction/News",
        element: <News />
      },
      {
        path: "/jobs-junction/Find Resumes",
        element: <Resume />
      },
      {
        path: "/jobs-junction/Companies",
        element: <Companies/>
      }
    ]
  },
  {
    path: "/jobs-junction/login",
    element: <Login />
  },
  {
    path: "/jobs-junction/register",
    element: <Register />
  }

]);

export default App;