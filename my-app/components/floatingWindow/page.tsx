'use client';

import { useState } from 'react';

import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function FloatingTab() {
  const [InDate, setCheckinData] = useState('');
  const [OutDate, setCheckOutData] = useState('');
  const [place, setplaceData] = useState('');
  const [Accomidations, setAccomidationData] = useState('');
  const totalDataHandler = async () => {
    console.log('button clicked');
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post('/api/booking', {
        InDate,
        OutDate,
        place,
        Accomidations,
      });
      if (data.success) {
        console.log('data added successfully');
        toast.success('your dates are fixed ');
      } else {
        toast.error(data.message);
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
    <div className=' absolute lg:top-165 left-1/2 -translate-x-1/2 bg-gray-100 rounded-2xl shadow-lg w-11/12 max-w-7xl h-20 z-30 flex flex-row justify-around p-2 md:top-147 md:w-[99vw] gap-1.5'>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>check in</h1>
        <input
          type='date'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
          onChange={(e) => {
            setCheckinData(e.target.value);
          }}
          value={InDate}
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>check out</h1>
        <input
          type='date'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
          onChange={(e) => {
            setCheckOutData(e.target.value);
          }}
          value={OutDate}
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>Place</h1>
        <select
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
          onChange={(e) => {
            setplaceData(e.target.value);
          }}
          value={place}>
          <option>SelectOne</option>
          <option>OOty</option>
          <option>Maldives</option>
          <option>Bahamas</option>
          <option>Switzerland</option>
        </select>
        {/* <input
          type='type'
          placeholder='Place'
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
          onChange={(e) => {
            setplaceData(e.target.value);
          }}
          value={place}
        /> */}
      </div>
      <div className='flex flex-col'>
        <h1 className='text-sm text-gray-600'>Accomodations</h1>
        <select
          className='text-xs font-extralight border p-2  rounded-2xl border-gray-500 focus:outline-none'
          onChange={(e) => {
            setAccomidationData(e.target.value);
          }}
          value={Accomidations}>
          <option>Accommodations</option>
          <option>Single Rooms</option>
          <option>Villa</option>
          <option>Apartment</option>
        </select>
      </div>
      <div className='mt-4'>
        {/* <button
          className=' bg-transparent rounded-md  text-xs font-medium hover:text-white w-[150px] h-[30px] hover:bg-black'
          onClick={totalDataHandler}>
          {`check Availability >> `}
        </button> */}
        {place.length > 0 &&
        Accomidations.length > 0 &&
        InDate.length > 0 &&
        OutDate.length > 0 ? (
          <Link href='/discover'>
            <button
              className='bg-transparent rounded-md text-xs font-medium hover:text-white w-[150px] h-[30px] hover:bg-black active:scale-95 transition-transform duration-150'
              onClick={totalDataHandler}>
              Check Availability &gt;&gt;
            </button>
          </Link>
        ) : (
          <button
            className='bg-transparent rounded-md text-xs font-medium hover:text-white w-[150px] h-[30px] hover:bg-black active:scale-95 transition-transform duration-150'
            onClick={totalDataHandler}>
            Fill all details &gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
}
