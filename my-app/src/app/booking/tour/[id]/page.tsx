import Image from 'next/image';
import { connectDb } from '@/lib/config/db';
import { SunMoon } from 'lucide-react';
import TourCardModel from '@/lib/Model/tourcardData';


const AdventureBooking = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  await connectDb();
  const adventureData = await TourCardModel.findById(id);

  const tax = 450;
  const totalAmount = adventureData.price + tax;

  return (
    <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 my-6 border border-gray-100'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2'>
          <SunMoon size={20} className='text-yellow-600' />
          Adventure Booking Review
        </h2>
        <span className='text-sm text-gray-500'>#{adventureData.id}</span>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 border-b pb-4'>
        <div className='w-full sm:w-1/3 relative h-40 rounded-lg overflow-hidden'>
          <Image
            src={adventureData.img}
            alt={adventureData.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='flex-1'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-800'>
            {adventureData.title}
          </h3>
          <p className='text-sm text-gray-500 mt-1'>{adventureData.place}</p>
          <p className='text-sm text-yellow-500'>
            ⭐ {adventureData.rating} / 5
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-b'>
        <div>
          <p className='text-xs text-gray-500'>Duration</p>
          <p className='text-sm font-medium text-gray-800'>
            {adventureData.days} Days
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500'>Max Persons</p>
          <p className='text-sm font-medium text-gray-800'>
            {adventureData.persons}
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500'>Location</p>
          <p className='text-sm font-medium text-gray-800'>
            {adventureData.place}
          </p>
        </div>
      </div>

      <div className='py-4 border-b'>
        <h4 className='text-sm font-semibold text-gray-800 mb-3'>
          Price Details
        </h4>
        <div className='space-y-2 text-sm text-gray-800'>
          <div className='flex justify-between'>
            <span>Base Price</span>
            <span>₹ {adventureData.price}</span>
          </div>
          <div className='flex justify-between'>
            <span>Taxes & Service Fees</span>
            <span>₹ {tax}</span>
          </div>
          <div className='flex justify-between border-t pt-2 font-semibold text-gray-900'>
            <span>Total Amount</span>
            <span>₹ {totalAmount}</span>
          </div>
        </div>
      </div>

      <div className='mt-4 flex justify-center sm:justify-start'>
        <button
          className='w-full sm:w-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 
          hover:from-gray-800 hover:via-gray-900 hover:to-black 
          text-white font-medium px-6 py-2.5 rounded-xl shadow-lg 
          transition-all duration-300 ease-in-out active:scale-95 active:translate-y-[2px]
          text-sm cursor-pointer'>
          Book Adventure
        </button>
      </div>
    </div>
  );
};

export default AdventureBooking;
