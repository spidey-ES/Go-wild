'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Book = ({
  totalPersons,
  specificItem,
}: {
  totalPersons: number;
  specificItem: string;
}) => {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const peopleCheckFn = () => {
    return count !== totalPersons
      ? toast.error(`minimum limit is ${totalPersons}`)
      : router.push(`/booking/tour/${specificItem}`);
  };

  return (
    <div className='flex justfiy-between '>
      <div className='border rounded p-1. px-6'>
        {count > 0 && (
          <button
            className='text-green-400 mr-2 cursor-pointer'
            onClick={() => {
              setCount(count - 1);
            }}>
            -
          </button>
        )}
        <button className='text-green-300 text-xl'>{count} </button>
        <button
          className='text-green-400 ml-2 cursor-pointer'
          onClick={() => {
            setCount(count + 1);
          }}>
          +
        </button>
      </div>
      {/* <button className='bg-orange-200 rounded-md px-5 py-2 text-xs font-medium text-orange-500 ml-2'>
        Book
        
      </button> */}
      <button className='relative overflow-hidden bg-orange-200 rounded-md px-5 py-2 text-xs font-medium text-orange-500 ml-2 transition-transform duration-150 active:scale-95 cursor-pointer'>
        <span className='absolute inset-0 bg-orange-300 opacity-0 transition-opacity duration-300 active:opacity-30'></span>
        <span
          className='relative z-10'
          onClick={() => {
            peopleCheckFn();
          }}>
          Book
        </span>
      </button>
    </div>
  );
};

export default Book;
