import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import TestPage from './pages/TestPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "parking",
        element: <TestPage />,
      },
  ]);

  ReactDOM.render(<RouterProvider router={router} />, document.querySelector("#root"))