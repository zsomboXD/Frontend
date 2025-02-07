
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp';
import { Auth } from './pages/Auth';
import { PwReset } from './pages/PwReset';
import { MyProfile } from './pages/MyProfile';
import { DeleteAccount } from './pages/DeleteAccount';

const router=createBrowserRouter([
  {
    children:[
      {path:'/',element:<Home />},
      {path:'/signup',element:<SignUp />},
      {path:'/auth/in',element:<Auth />},
      {path:'/auth/up',element:<Auth />},
      {path:'/pwreset',element:<PwReset />},
      {path:'/profile',element:<MyProfile />},
      {path:'/deleteAccount',element:<DeleteAccount />}
    ]
  }
],
{
  future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }} 
)

function App() {
  return <RouterProvider router={router}   future={{v7_startTransition: true}}/>
}

export default App
