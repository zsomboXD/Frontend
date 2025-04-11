
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp';
import { Auth } from './pages/Auth';
import { PwReset } from './pages/PwReset';
import { MyProfile } from './pages/MyProfile';
import { DeleteAccount } from './pages/DeleteAccount';
import About from './pages/About';
import Categories from './pages/Categories';
import CategoryPageMen from './pages/CategoryPageMen';
import CategoryPageWomen from './pages/CategoryPageWomen';
import { Tips } from './pages/Tips';
import { Quotes } from './pages/Quotes';


const router=createBrowserRouter([
  {
    children:[
      {path:'/',element:<Home />},
      {path:'/signup',element:<SignUp />},
      {path:'/about',element:<About />},
      {path:'/auth/in',element:<Auth />},
      {path:'/auth/up',element:<Auth />},
      {path:'/pwreset',element:<PwReset />},
      {path:'/profile',element:<MyProfile />},
      {path:'/deleteAccount',element:<DeleteAccount />},
      {path:'/categories',element:<Categories />},
      {path:'/categorypagemen',element:<CategoryPageMen />},
      {path:'/categorypagewomen',element:<CategoryPageWomen />},
      {path:'/tips',element:<Tips />},
      {path:'/quotes',element:<Quotes />}
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
