import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './App/contact/page.jsx'
import Arrival from './App/Arrival/page.jsx'
import About from './App/About/page.jsx'
import Offers from './App/Offers/page.jsx'
import Pages from './App/product[id]/Pages.jsx'
import AdminPage from './Admin/AdminPage.jsx'



const router = createBrowserRouter([
  {basename:process.env.VITE_BASE_PATH || '/'},
  { path: '/', element: <App /> },
  {path:'/product/:id',element:<Pages/>},
  {path:'/contact',element:<Contact/>},
  {path:'/arrival',element:<Arrival/>},
  { path: '/about', element: <About /> },
  {path:'/offers', element:<Offers/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <AdminPage/> */}
  </StrictMode>,
)
