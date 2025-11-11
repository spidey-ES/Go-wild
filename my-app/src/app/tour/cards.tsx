import Image from 'next/image';
import Link from 'next/link';

interface DataofCards {
  id: number;
  objId: string;
  img: string;
  title: string;
  place: string;
  rating: number;
  price: number;
  days: number;
  persons: number;
}

export default function TourCards({
  id,
  objId,
  img,
  title,
  place,
  rating,
  price,
  days,
  persons,
}: DataofCards) {
  return (
    <div className='relative w-full max-w-xs sm:max-w-sm md:w-80'>
      <div className='relative w-full h-48 rounded-2xl overflow-hidden'>
        <Image
          src={img}
          alt={title}
          className='w-full h-full object-cover'
          fill
        />
      </div>

      <div className='relative z-10 w-[90%] bg-white p-5 rounded-2xl shadow-lg mx-auto mt-[-60px]'>
        <div className='flex items-center mb-2'>
          <span className='text-yellow-500 text-lg'>★★★★★</span>
          <span className='text-sm text-gray-600 ml-2'>{`(${rating})`}</span>
        </div>

        <h2 className='font-semibold text-lg text-gray-800'>{title}</h2>

        <p className='text-sm text-gray-500 mt-2'>{`North provience , ${place}`}</p>
        <p className='text-sm text-gray-500 mt-1'>{`₹${price}`}</p>

        <hr className='my-4 border-gray-200' />

        <div className='flex justify-between items-center text-sm text-gray-700'>
          <div className='flex items-center gap-4'>
            <span>{`⏳${days} `}</span>
            <span>{`👥 ${persons}`}</span>
          </div>
          <button className='text-green-600 font-semibold hover:underline'>
            <Link href={`/tour/${objId}`}>Details →</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
