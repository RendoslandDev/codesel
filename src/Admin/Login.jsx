import React from 'react';
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const   [formData , setFormData] = React.useState({
    username: '',
    password: ''
  });

  const [error, setError] = React.useState('');
    const navigate = useNavigate();
    const [isloading, setIsloading] = React.useState(false);

    const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsloading(true);

    try {
    //   ....now we fetch the credentials from the database
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();

      // now we store the token as token
      localStorage.setItem('token', data.token);

      // Redirect to protected route
      navigate('/AdminPage');
    } catch (e) {
      setError(e.message);
    } finally {
      setIsloading(false);
    }
    };


  return (
    <>
    <div className='border border-gray-400 rounded shadow m-20 p-5 h-[600px]'>
        {error && <div className='text-red-500 mt-4'>{error}</div>}
        <div className='flex justify-evenly container  text-gray-600 md:px-12 xl:px-6 lg-[50%]  '>
            <div className='sapce-y-6 md:space-y-0 lg:flex md:gap-6 lg:items-center lg:gap-12 items-center'>
             <form onSubmit={handleSubmit} >
               <div className='container font-serif lg: justify-center m-auto p-10 rounded'>


          <input
                    type="text"
                    name="username"
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm  focus:outline-none pl-4 mb-10 border-t-2 border-amber-600"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
          />

        <input
                    type="text"
                    name="password"
                    className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-sm  focus:outline-none pl-4 mb-10 border-t-2"
                    placeholder="Password"
                     value={formData.password}
                    onChange={handleChange}
          />



        <div className='flex flex-row gap-2'>

          <button
        type="submit"
        disabled={isloading}
        className={`w-full h-12 border border-red-500 text-gray-500 text-base font-serif font-bold leading-6 rounded-lg transition-all duration-700 hover:bg-red-400 bg-white shadow-sm ${isloading ? 'opacity-50 cursosr-not-allowed':''}`}>
          {isloading ? 'Logging in ...' : 'Login'}
        </button>
         </div>
      </div>
    </form>
            </div>


            <div className='lg:w-[50%] '>
                <img src='/admin.png' className='h-[400px]'/>
            </div>
        </div>
    </div>

    </>
  )
}
