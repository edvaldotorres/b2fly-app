import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/axios';
import toast from 'react-hot-toast';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await api.post('/auth/login', data)
      console.log(response.data)
      const {access_token} = response.data
      localStorage.setItem('access_token', access_token);
      navigate("/tasks");
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response.status === 401){
        toast.error('Email or password invalid') 
      }  else {
        toast.error('Error on authentication') 
      }
      
    }
  };

  return (
    <>
      <div className="container flex h-screen w-full align-middle">
        <form onSubmit={handleSubmit(onSubmit)} className="my-auto align-middle text-center w-1/3 px-3 py-4  mx-auto rounded">
          <input  {...register('email')} type="text" placeholder="Email" className=" w-full mx-auto text-sm py-2 px-3 rounded bg-neutral-200" />
          {errors.email && <span className='text-red-600 text-sm'>{errors.email.message}</span>}
          <input  {...register('password')} type="password" placeholder="Password" className=" w-full mx-auto text-sm py-2 px-3 rounded my-3 bg-neutral-200" />
          {errors.password &&<span className='text-red-600 text-sm'>{errors.password.message}</span>}

          <button className=" text-slate-600 font-bold py-2 px-4 rounded border block mx-auto w-full hover:bg-neutral-100 transition-all" type="submit">
            Login
          </button>
        </form>
      </div>    
    </>
  )
}

