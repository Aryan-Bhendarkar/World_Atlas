import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

import "./App.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'country',
        element: <Country/>
      }, 
      {
        path:'country/:id',
        element: <CountryDetails/>
      },
      {
        path: 'contact',
        element: <Contact/>
      }    
    ]
  }
])


const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;