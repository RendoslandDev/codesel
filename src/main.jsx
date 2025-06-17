import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Arrival from './App/Arrival/page.jsx'
import About from './App/About/page.jsx'
import Offers from './App/Offers/page.jsx'
import Pages from './App/product[id]/Pages.jsx'
import AdminPage from './Admin/AdminPage.jsx'
import Products from './Admin/Products.jsx'
import Settings from './Admin/Settings.jsx'
import Orders from './Admin/Orders.jsx'
import Reports from './Admin/Reports.jsx'
import Customers from './Admin/Customers.jsx'
import AddToProduct from './Admin/AddToproduct.jsx'
import Login from './Admin/Login.jsx'
import Error from './Error.jsx'
import { CartProvider } from './App/Contexts/CartContext.jsx'
import CartPage from './App/Cart/CartPage.jsx'
import Contact from './App/Contact.jsx'


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {path:'/product/:id',element:<Pages/>},
  {path:'/arrival',element:<Arrival/>},
  { path: '/about', element: <About /> },
  {path:'/offers', element:<Offers/>},
  {path:"/AdminPage" ,element:<AdminPage/>},
  {path:'/products',element:<Products/>},
  {path:'/orders',element:<Orders/>},
  {path:'/settings',element:<Settings/>},
  {path:"/reports" , element:<Reports/>},
  {path:'/Customers',element:<Customers/>},
  {path:'/AddToProduct',element:<AddToProduct/>},
  {path:'/Login',element:<Login/>},
  {path:'/Error',element:<Error/>},
{path:'/CartPage',element:<CartPage/>},
{path:'/Contact' , element:<Contact/>}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
