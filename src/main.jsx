import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact.jsx';
import Error from './Components/Error.jsx'
import CountryData from './Components/CountryData.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error/>,
    element: <App/>,
    children :[

      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/:country",
        element: <CountryData/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>,
)
