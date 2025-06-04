import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/login");
        window.location.reload();
    }

  return (
    <section className=' w-[25%] font-serif  '>
      <div className='m-10 p-2 '>
        <div className='list-none flex flex-col  px-3.5 py-2.5 rounded-md text-black my-15 '>
          <a href='/AdminPage' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Dashboard</a>
          <a href='/Products' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Products</a>
          <a href='/Orders' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Orders</a>
          <a href='/Customers' className='rounded-md shadow px-2.5 w-1/2 py-2.5 text-sm  uppercase text-black mb-5'>Customers</a>
          <a  href='/Reports' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Reports</a>
          <a href='/Settings' className='rounded-md shadow px-3.5 w-1/2 py-2.5 text-sm  uppercase text-black'>Settings</a>
        </div>
        <div className='flex flex-row justify-center'>
          <button onClick={handleLogout}  className='rounded-md bg-red-400 mr-10  px-10 py-2.5 text-sm font-semibold text-white shadow-sm font-serif uppercase'>Logout</button>
        </div>
        </div>
    </section>
  )
}
