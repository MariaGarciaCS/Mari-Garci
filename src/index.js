import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import TestPage from './pages/TestPage'
import ParkingPage from './pages/parkingPage'

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
        element: <ParkingPage />,
      },
  ]);

  ReactDOM.render(<RouterProvider router={router} />, document.querySelector("#root"))

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<RouterProvider router={router} />);