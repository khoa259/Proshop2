import React from 'react'

const Signin = () => {
  return (
    <>
    <div className="flex items-center justify-center bg-gray-300 py-14">
  <div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-[#ff7f7f]">
    <div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-[#ff7f7f] shadow-2xl p-6 rounded-full text-white">Sign In</div>
    <div className="mt-2">
      <form>
        <div className="relative w-full mb-3">
          <div className="relative w-full mb-3">
            <input type="name" className="mt-4 border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Name" />
            {/* {errors.name && <small className="p-2 text-red-500">* Name</small>} */}
          </div>
          <input type="email" className="mt-6 border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" />
          {/* {errors.email && <small className="p-2 text-red-500">* Email</small>} */}
        </div>
        <div className="relative w-full mb-3">
          <input type="password" className="mt-4 border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" />
          {/* {errors.password && <small className="p-2 text-red-500">* Password</small>} */}
        </div>
        <div className="text-center mt-6">
          <button className="p-3 rounded-lg bg-[#ff7f7f] outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500">Signin</button>
        </div>
        <div className="flex flex-wrap mt-6">
          <div className="w-1/2 text-left">
            <a href="#" className="text-blue-900 text-xl text-[#111111]"><small>Forgot password?</small></a>
          </div>
          <div className="w-1/2 text-right">
            <div to="/signin" className="text-blue-900 text-xl text-[#111111]"><small>Sign In</small></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</>
  )
}

export default Signin