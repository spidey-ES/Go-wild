// import BookingReview from '../../../components/bookingpage/booking';
import Image from 'next/image';
import { connectDb } from '@/lib/config/db';
import HotelModel from '@/lib/Model/hotelModel';
import datesDataModel from '@/lib/Model/datesData';

async function Booking({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await connectDb();
  const destinationNameData = await HotelModel.findById(id);
  console.log(destinationNameData);
  const hotelRent = destinationNameData.Price;

  // const recentDestinationNameData = destinationNameData
  const destinationTimeData = await datesDataModel.find();
  const recentDate = destinationTimeData[destinationTimeData.length - 1];
  console.log(recentDate);
  const inDate = new Date(recentDate.InDate);
  const outDate = new Date(recentDate.OutDate);

  const totalDays =
    (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24) || 1;

  const calculatedTotalBill = hotelRent * totalDays - 270 - 441 + 231;
  const discountedPrice = hotelRent - 270;

  return (
    <div>
      <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 my-6 border border-gray-100'>
        {/* Header */}
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>
            Review Booking
          </h2>
          <span className='text-sm text-gray-500'>
            {recentDate.Accomidations}
          </span>
        </div>

        {/* Hotel Info */}
        <div className='flex flex-col sm:flex-row gap-4 border-b pb-4'>
          <div className='w-full sm:w-1/3 relative h-40 rounded-lg overflow-hidden'>
            <Image
              src={destinationNameData.AccomidationImg}
              alt='Hotel'
              fill
              className='object-cover'
            />
          </div>
          <div className='flex-1'>
            <h3 className='text-base sm:text-lg font-semibold text-gray-800'>
              {destinationNameData.hotelName}
            </h3>
            <p className='text-sm text-gray-500 mt-1'>
              {destinationNameData.place}
            </p>
            <p className='text-sm text-gray-500'>⭐ 3 • Like a 3★</p>
          </div>
        </div>

        {/* Booking Details */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-b'>
          <div>
            <p className='text-xs text-gray-500'>CHECK-IN</p>
            <p className='text-sm font-medium text-gray-800'>
              {inDate
                ? new Date(recentDate.InDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    weekday: 'short',
                  })
                : 'N/A'}
            </p>
          </div>
          <div>
            <p className='text-xs text-gray-500'>CHECK-OUT</p>
            <p className='text-sm font-medium text-gray-800'>
              {outDate
                ? new Date(recentDate.OutDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    weekday: 'short',
                  })
                : 'N/A'}
            </p>
          </div>
          <div>
            <p className='text-xs text-gray-500'>Guests</p>
            <p className='text-sm font-medium text-gray-800'>2 Adults</p>
          </div>
        </div>

        {/* Room Info */}
        <div className='py-4 border-b'>
          <h4 className='text-sm font-semibold text-gray-800 mb-2'>--Info--</h4>
          <ul className='text-sm text-gray-600 list-disc ml-4 space-y-1'>
            <li>Stay Only</li>
            <li>No meals included</li>
          </ul>
          <p className='text-xs text-red-500 mt-2'>
            Non-Refundable — Refund not applicable for this booking
          </p>
        </div>

        {/* Property Rules */}
        <div className='py-4 border-b'>
          <h4 className='text-sm font-semibold text-gray-800 mb-3'>
            Property Rules & Information
          </h4>
          <div className='text-sm text-gray-600 space-y-2'>
            <p>✅ Unmarried couples allowed. Local IDs are allowed.</p>
            <ul className='list-disc ml-4 space-y-1'>
              <li>Primary guest should be at least 18 years of age.</li>
              <li>
                Passport, Aadhaar, Driving License, and Govt. ID accepted.
              </li>
              <li>Pets are not allowed.</li>
            </ul>
          </div>
        </div>

        {/* Price Section */}
        <div className='py-4 border-b'>
          <h4 className='text-sm font-semibold text-gray-800 mb-3'>
            Total Price
          </h4>
          <div className='space-y-2 text-sm text-gray-800'>
            <div className='flex justify-between'>
              <span>Base Price (1 Night)</span>
              <span>₹ {hotelRent}</span>
            </div>
            <div className='flex justify-between text-green-600'>
              <span>Discount by Property</span>
              <span>- ₹270</span>
            </div>
            <div className='flex justify-between font-medium text-gray-800'>
              <span>Price after Discount</span>
              <span>₹ {discountedPrice}</span>
            </div>
            <div className='flex justify-between'>
              <span>Taxes & Service Fees</span>
              <span>₹231</span>
            </div>
            <div className='flex justify-between'>
              <span>Number of days</span>
              <span>
                {'  '}
                {totalDays} x {discountedPrice}/-
              </span>
            </div>
            <div className='flex justify-between text-green-600'>
              <span>Promotion: MMTSMARTDEAL</span>
              <span>- ₹441</span>
            </div>
            <div className='flex justify-between border-t pt-2 font-semibold text-gray-900'>
              <span>Total Amount to be Paid</span>
              <span>₹ {calculatedTotalBill}</span>
            </div>
          </div>
        </div>

        {/* Coupon Section */}
        <div className='py-4 flex justify-between'>
          <div>
            <h4 className='text-sm font-semibold text-gray-800 mb-2'>
              Coupon Codes
            </h4>
            <p className='text-sm text-gray-600'>
              MMTSMARTDEAL applied successfully!
            </p>
          </div>

          <div className='mt-4 flex justify-center sm:justify-start'>
            <button
              className='sm:w-auto bg-gradient-to-r from-gray-900 via-black to-gray-800 
    hover:from-gray-800 hover:via-gray-900 hover:to-black 
    text-white font-medium px-6 py-2.5 rounded-xl shadow-lg 
    transition-all duration-300 ease-in-out active:scale-95 active:translate-y-[2px]
    text-sm cursor-pointer'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
