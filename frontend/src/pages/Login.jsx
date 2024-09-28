import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {

      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.msg);
        }

      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });

        if (response.data.success) {
          
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);

        } else {
          toast.error(response.data.msg);
        }

      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] max-w-96 m-auto mt-14 gap-4 text-gray-800">

      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>

      {
        currentState === "Login" ? "" : (
          <input
            type="text"
            placeholder='Name'
            className='w-full px-3 py-2 border border-gray-800'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        )
      }
      <input
        type="email"
        placeholder='Email'
        className='w-full px-3 py-2 border border-gray-800'
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder='Password'
        className='w-full px-3 py-2 border border-gray-800'
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === "Login" ? (
            <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>Create Account</p>
          ) : (
            <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login here</p>
          )
        }
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {
          currentState === "Login" ? "Sign In" : "Sign Up"
        }
      </button>

    </form>
  )
}

export default Login