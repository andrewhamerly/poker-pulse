import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css';

import App from './App.jsx'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import Event from './pages/Event';
// import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/feed',
        element: <Feed />
      },
      {
        path: '/event',
        element: <Event />
      },
      // {
      //   path: '/schedule',
      //   element: <Schedule />
      // },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
