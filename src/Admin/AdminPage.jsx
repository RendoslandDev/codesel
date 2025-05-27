import React, {useState,useEffect} from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar , Doughnut, Line} from "react-chartjs-2"
import {FaBraille ,FaEnvira ,} from "react-icons/fa"
import {BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi"
import { MdOutlineProductionQuantityLimits  } from "react-icons/md";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import AddToProduct from './AddToproduct'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 function AdminPage() {
 const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState(null)



useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/product');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);
const categoryData = products.reduce((acc, product) => {
  const categoryName = `${product.category}`;
  acc[categoryName] = (acc[categoryName] || 0) + product.price;
  return acc;
}, {});


 const totalProductCount = products.length;

  const validProducts = products.filter(product => !isNaN(product.price) && product.price > 0);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const product = products[context.dataIndex];
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += `$${context.raw.toFixed(2)}`;

            if (context.datasetIndex === 1) {
              label += ` (${product.total_quantity} units)`;
            }
            return label;
          }
        }
      },
      title: {
        display: true,
        text: 'Product Price & Inventory Value',
        font: {
          size: 16
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount ($)',
          font:{
            size: 20
          }
        }
      },
      x: {
        title: {

          display: true,
          text: 'Products',
          font:{
            size: 16,
        color: 'red'
          }
        }
      }
    },
  };




  const chartData = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Product Prices ($)',
        data: products.map(product => product.price),
        backgroundColor: products.map((_, index) =>
          `hsl(${(index * 360 / products.length) % 360}, 70%, 60%)`
        ),
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Inventory Value ($)',
        data: products.map(product => product.price * product.total_quantity),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 8,
        borderSkipped: false,
      }
    ],
    };

  const totalValue = products.reduce((sum, product) => sum + product.price, 0);


  return (
    <>
      <Header />

      <main className='container flex flex-row justify-center'>
        <SideBar />
        <section className='w-[80%]  p-5'>
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
                <>
      <div className='lg:flex gap-5 items-center  p-3 '>
             <div className=' rounded w-[300px] h-[150px] shadow-sm'>
                <div className='flex flex-row justify-between'>
                  <FaBraille className='border-2 px-2 py-0.5 m-1 text-gray-200 text-4xl rounded-md shadow' />
                   <div className='gap-2 flex flex-row rounded-md bg-green-100 text-black item-center px-2.5 py-2.5 m-1'>
                     <BiUpArrowAlt />
                     <p>75%</p>
                   </div>
                </div>
                <p className='px-1.5 py-4 text-gray-500 font-serif'>Total Sales</p>
                <p className='text-2xl pb-3.5 px-1.5 text-gray-500 font-serif'>${totalValue}</p>
             </div>
              <div className='shadow-sm rounded w-[300px] h-[150px]'>
              <div className='flex flex-row justify-between'>
                <MdOutlineProductionQuantityLimits className='border-2 px-2 py-0.5 m-1 text-gray-200 text-4xl rounded-md shadow' />
                <div className='gap-2 flex flex-row rounded-md bg-green-100 text-black item-center px-2.5 py-2.5 m-1'>
                  <BiDownArrowAlt className='text-red-500'/>
                  <p></p>
                </div>
              </div>
              <p className='px-1.5 py-4 text-gray-500 font-serif'>Products</p>
              <p className='text-2xl pb-3.5 px-1.5 text-gray-500 font-serif'>{totalProductCount}</p>
            </div>
             <div className='shadow-sm rounded w-[300px] h-[150px]'>
                <div className='flex flex-row justify-between'>
                  <FaEnvira className='border-2 px-2 py-0.5 m-1 text-gray-200 text-4xl rounded-md shadow' />
                   <div className='gap-2 flex flex-row rounded-md bg-red-200 text-black item-center px-1.5 py-0.5 m-1'>
                     <BiUpArrowAlt />
                     <p>25%</p>
                   </div>
                </div>
                <p className='px-1.5 py-4 text-gray-500 font-serif'>Orders</p>
                <p className='text-2xl pb-3.5 px-1.5 text-gray-500 font-serif'>2/10</p>
             </div>

      </div>

      <div className=' rounded  lg:flex gap-2 px-1.5 py-0.5 flex-row w-full'>
            <div className='shadow-md w-[50%] h-[400px]'>
                <Doughnut

                data={{
                  labels:Object.keys(categoryData),
                  datasets: [
                    {
                     data: Object.values(categoryData),
                      label: 'Products',
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                      ],
                      borderColor: [
                        // 'rgba(255, 99, 132, 1)',
                        'red',
                        'red',
                        'gray',
                      ],
                      borderWidth: 1,
                      borderRadius: 2,

                    },
                  ],
                }}
                />
            </div>
            <div className='shadow-md w-[90%] h-[400px]  rounded'>
                <Bar

              options={options}
              key={products.length}
                data={{
                labels:products.map(product => product.name),
                  datasets: [
                    {
                      label: 'Sales',
                      data: products.map(product => product.price),
        backgroundColor: products.map((_, index) =>
          `hsl(${(index * 360 / products.length) % 360}, 70%, 60%)`
        ),
                      backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    hoverBackgroundColor:'red',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      borderWidth: 1,
                    },
                  ],borderRadius: 20,
                }


        }



             />
            </div>
      </div>
      </>
    )}
        </section>
      </main>


    </>
  )

 }





function Header(props) {
      const [modal , setModal] = useState(false)
     const toggleModal = () => {
    setModal(!modal)
  }
                return(
                  <div className=' rounded-md container bg-white font-mono text-black font-bold md:px-12 w-full  md:flex flex-row justify-evenly m-10 float-start'>
                    <div className=' flex flex-row'>
                    <a href='/' className='text-black text-xl md:px-12 uppercase font-serif list:disc'>CloudSales</a>
                    </div>

                 <div className="flex  items-center gap-x-6 ">
                            <a
                                href="/contact"
                                className="rounded-md bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                Customer care
                            </a>
                            <a
                                href="/AddToproduct"
                                className="rounded-md  bg-red-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                                ADD Products <span aria-hidden="true">+</span>
                            </a>
                        </div>
                                </div>
                )
}

function SideBar() {
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
          <a href='/Logout' className='rounded-md bg-red-400 mr-10  px-10 py-2.5 text-sm font-semibold text-white shadow-sm font-serif uppercase'>Logout</a>
        </div>
        </div>
    </section>
  )
}



export default AdminPage;
