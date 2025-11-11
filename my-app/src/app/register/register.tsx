'use client';
import axios from 'axios';
import { error } from 'console';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const router = useRouter();

  const SubmitEventHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post('api/auth/register', {
        name,
        email,
        password,
      });

      if (data.success) {
        toast.success('loggedin successfully');
        router.push('/');
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      if (err.response?.data?.message) {
        //its like i am takin response obj from error if present ,take data obj from response and from that data take a key named messaeg and display it
        toast.error(err.response.data.message);
      } else {
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <div>
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='w-full max-w-sm rounded-lg bg-white p-8 shadow-2xl'>
          <h1 className='mb-6 text-center text-2xl font-bold text-gray-800'>
            Welcome !
          </h1>
          <form onSubmit={SubmitEventHandler}>
            {/* Name */}
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='text'
                placeholder='Name'
                className='block w-full rounded-md border border-gray-300 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            {/* Email Input */}
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type='email'
                id='email'
                placeholder='you@example.com'
                className='block w-full rounded-md border border-gray-300 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                required
                value={email}
              />
            </div>

            {/* Password Input */}
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-medium text-gray-700'>
                Password
              </label>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type='password'
                id='password'
                placeholder='••••••••'
                className='block w-full rounded-md border border-gray-300 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                value={password}
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full rounded-lg bg-black px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400'>
              SignUp
            </button>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Register;
