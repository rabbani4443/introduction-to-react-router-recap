import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './Components/Posts/Posts';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
      {
        path: "/posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')  ,
        element: <Posts></Posts>
      },
      {
        path:'/post/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element:<PostDetails></PostDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
