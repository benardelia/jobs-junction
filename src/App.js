import { useState } from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/layout";
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