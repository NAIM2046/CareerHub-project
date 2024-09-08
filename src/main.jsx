import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import AppliedJobs from './AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import JobDetails from './JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path: "/applied" ,
        element : <AppliedJobs></AppliedJobs>

      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../public/jobs.json'),
      }
    ]
   
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
