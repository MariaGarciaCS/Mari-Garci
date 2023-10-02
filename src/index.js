import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

  ReactDOM.render(<RouterProvider router={router} />, document.querySelector("#root"))