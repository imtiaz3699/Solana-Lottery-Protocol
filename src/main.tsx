import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root.tsx'
import LandingPage from './pages/LandingPage/LandingPage.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalProvider } from './context/provider.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
    <RouterProvider router = {router}/>
    </GlobalProvider>
  </React.StrictMode>,
)
