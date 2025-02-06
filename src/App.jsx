
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp';

const router=createBrowserRouter([
  {
    children:[
      {path:'/',element:<Home />},
      {path:'/signup',element:<SignUp />}
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
