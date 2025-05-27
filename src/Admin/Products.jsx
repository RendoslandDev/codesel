import React , {useState, useEffect} from 'react'
import {FaEnvira ,} from "react-icons/fa"

export default function Products() {
   const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null)
  const [updateForm , setUpdateForm] = useState({
    name: '',
    imageurl: '',
    category: '',
    price: 0,
    description: '',
    link: '#',
    })


    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/product')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        if (data.success) {
          setProducts(data.products)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

   const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      // Refresh product list after deletion
      setProducts(products.filter(products => products.id !== id))
    } catch (err) {
      setError(err.message)
    }
  }


     const handleUpdateClick = (product) => {
    setEditingProduct(product.id);
    setUpdateForm({
      name: product.name,
      price: product.price,
      imageurl: product.imageurl,
      description: product.description,
      link: product.link,
      category: product.category
    });
    }

    const handleUpdateSubmit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateForm),
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      setProducts(products.map(p =>
        p.id === id ? updatedProduct.product : p
      ));
      setEditingProduct(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancelUpdate = () => {
    setEditingProduct(null);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 :
              name === 'category' ? parseInt(value) : value
    }));
  };





  return (
    <>
    <Header/>
    <main>
        <div className='flex flex-row  '>
            <SideBar/>
            <section className='w-[85%]  font-serif '>
            <div className='m-1 p-2 '>
                <div className='flex flex-row justify-between'>
                <h1 className='text-black text-3xl font-serif font-thin'>Products</h1>
                <FaEnvira className='border-2 px-2 py-0.5 m-1 text-gray-200 text-4xl rounded-md shadow' />
                </div>

                <hr className='border-b-2 border-black w-full my-5'/>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              ) : (
            <div className="">
    <table className="w-full p-2 text-sm font-serif text-left rtl:text-right text-gray-500 dark:text-black rounded">
        <thead className="text-xs text-gray-700 p-2 uppercase bg-gray-50 dark:bg-gray-300 dark:text-black ">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    description
                </th>
                <th scope="col" className="px-6 py-3">
                    perc_left
                </th>
                <th scope="col" className="px-6 py-3">
                    Operation
                </th>
            </tr>
        </thead>
        <tbody >
            {products.map((product) => {
            if (!product) return null;
            return(

            <tr key={product.id} className="text-black border-b dark:bg-white dark:border-red-700  border-gray-200 rounded">

                {editingProduct === product.id ? (
                    <>
                    <td className="px-6 py-4">
                                <input
                                  type="text"
                                  name="name"
                                  value={updateForm.name}
                                  onChange={handleUpdateChange}
                                  className="w-full p-1 border rounded"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="text"
                                  name="imageurl"
                                  value={updateForm.imageurl}
                                  onChange={handleUpdateChange}
                                  className="w-full p-1 border rounded-md"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <select
                                  name="category"
                                  value={updateForm.category}
                                  onChange={handleUpdateChange}
                                  className="w-full p-1 border rounded"
                                >
                                  <option value={1}>Category 1</option>
                                  <option value={2}>Category 2</option>
                                  <option value={3}>Category 3</option>
                                  <option value={4}>Category 4</option>
                                  <option value={5}>Category 5</option>
                                </select>
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="number"
                                  name="price"
                                  value={updateForm.price}
                                  onChange={handleUpdateChange}
                                  className="w-full p-1 border rounded"
                                  step="0.01"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <input
                                  type="text"
                                  name="description"
                                  value={updateForm.description}
                                  onChange={handleUpdateChange}
                                  className="w-full p-1 border rounded"
                                />
                              </td>
                              <td className="px-6 py-4">
                                {Math.round((product.bought_quantity / product.total_quantity) * 100)}%
                              </td>
                              <td className="px-6 py-4 flex flex-row gap-2">
                                <button
                                  onClick={() => handleUpdateSubmit(product.id)}
                                  className="rounded-md bg-green-200 border border-green-300 px-3.5 py-2.5 text-sm font-semibold text-green-700 shadow-sm hover:underline"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={handleCancelUpdate}
                                  className="rounded-md bg-gray-200 border border-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:underline"
                                >
                                  Cancel
                                </button>
                              </td>
                            </>
                          ) : (
                  <>
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {product.name}
                </th>
                <td className="px-6 py-4">
                    <img src={product.imageurl} alt={product.name} onError={(e)=>{
                        e.target.onerror = null
                        e.target.src="https://via.placeholder.com/150"
                    }}
                    />
                </td>
                <td className="px-6 py-4">
                    {product.category}
                </td>
                <td className="px-6 py-4">
                    ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 dark:text-black">
                 {product.description}
                </td>
                <td className="px-6 py-4 dark:text-black">
                    {product.total_quantity > 0
                ? `${Math.round((product.bought_quantity / product.total_quantity) * 100)}%`
                : '0%'}
                </td>
                <td className="px-6 py-4 flex flex-row gap-2  ">
                    <button
                    onClick={() => handleUpdateClick(product)}
                    href="#" className="rounded-md bg-blue-500  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:underline">Update</button>
                    <button
                    onClick={() => handleDelete(product.id)}
                     href="#" className="rounded-md bg-red-500  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:underline">Delete</button>
                </td>
                </>
                          )}
            </tr>

)})}
        </tbody>
    </table>
    </div>  )}
            </div>
            </section>
        </div>
    </main>
    </>
  )
}


function Header(props) {
                return(
                  <div className=' rounded-md container bg-white font-mono text-black font-bold md:px-12 w-full  md:flex flex-row justify-evenly m-10 float-start'>
                    <div className=' flex flex-row'>
                    <a href='/' className='text-black text-xl md:px-12 uppercase font-serif list:disc'>CloudSales</a >
                    </div>

                 <div className="flex items-center gap-x-6 ">
                            <a
                                href="/contact"
                                className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                Customer care
                            </a>
                            <a
                                href="/AddToProduct"
                                className="rounded-md  bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                ADD Products <span aria-hidden="true">+</span>
                            </a>
                        </div>
                                </div>
                )
}

function SideBar() {
  return (
    <section className=' w-[25%] font-serif '>
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
          <a href='/Logout' className='rounded-md bg-red-400 mr-10  px-10 py-2.5 text-sm font-semibold text-white shadow-sm font-serif uppercase'>Logout</a>
        </div>
        </div>
    </section>
  )
}
