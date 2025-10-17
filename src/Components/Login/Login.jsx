import React, { use, useState } from "react";
import { supabase } from "../Auth/Supabase";
import {NavLink, useNavigate } from "react-router-dom";

export default function Login() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  let navigateDashboard = useNavigate()
  let handleLogin = async (e)=>{
    e.preventDefault()
    

  const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})

if(error){
  alert('Login Failed')
  console.log(error)
}
else{
  console.log("Login Successfully")
  navigateDashboard("/dashboard")
}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600 tracking-wide">
            OLX<span className="text-gray-700">Login</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Create your account and start selling today!
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
        
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            value={password}
              type="password"
              placeholder="Create a password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Signup */}
        <button className="w-full border border-gray-300 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 text-sm font-medium">
           Login with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Create an account?{" "}
          <NavLink to={'/signup'} className="text-blue-600 font-semibold hover:underline">
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
}
