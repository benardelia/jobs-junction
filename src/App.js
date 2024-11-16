import { useState } from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./pages/layout";
import Register from "./pages/register"

const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
  }
  
]);

export default App;