import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import Main from './Components/Main/Home/Main/Main';
import Blogs from './Components/Main/Blogs/Blogs';
import Login from './Components/Main/Login/Login';
import Registration from './Components/Main/Registration/Registration';
import AuthProvider from './providers/AuthProvider';
import Error from './Components/Error/Error';
import PrivateRoute from './Components/Main/PrivateRoute/PrivateRoute';
import ChefsRecipes from './Components/Main/ChefsRecipes/ChefsRecipes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/chef-recipes/:id",
        element: <PrivateRoute><ChefsRecipes></ChefsRecipes></PrivateRoute>,
        loader: ({params})=> fetch(`https://secret-chef-recipe-server.vercel.app/chefs/${params.id}`)
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
