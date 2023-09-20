import React from 'react'



const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-gradient-to-t from-gray-400 to-gray-200  p-8 rounded shadow-md w-full sm:w-96">
      <h2 className="text-2xl font-semibold text-black  mb-6">Login</h2>
      <form>
        <div className="mb-4">
          {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email or Password'
            className="mt-1 p-2.5 w-full  rounded-md "
            required
          />
        </div>
        <div className="mb-4">
          
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            className="mt-1 p-2.5 w-full  rounded-md "
            required
          />
        </div>

        {/* remember_me */}

        {/* <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="text-black rounded border-gray-300 dark:border-gray-600" name="remember_me" />
            <span className="ml-2 text-sm text-black">Remember me</span>
          </label>
        </div> */}


        <div className="flex  mt-7">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-900 text-white   py-1 px-2 rounded w-full"
          >
            Login
          </button>
        </div>

        <div className='flex justify-center mt-3'>
          <a href="#" className="text-sm text-black hover:text-gray-600">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  </div>

  )
}

export default Login
