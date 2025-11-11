import { connectDb } from '@/lib/config/db';
import axios from 'axios';
import Image from 'next/image';

export default async function BookingReview() { 
  // const fetchData = async() =>{
  //   const data = axios.get("")
  // } 
  await connectDb()
  return (
    <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 my-6 border border-gray-100'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>
          Review Booking
        </h2>
        <span className='text-sm text-gray-500'>Apartment</span>
      </div>

      {/* Hotel Info */}
      <div className='flex flex-col sm:flex-row gap-4 border-b pb-4'>
        <div className='w-full sm:w-1/3 relative h-40 rounded-lg overflow-hidden'>
          <Image src='/hotel.jpg' alt='Hotel' fill className='object-cover' />
        </div>
        <div className='flex-1'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-800'>
            1BHK with Balcony & Pool, Near Candolim Beach
          </h3>
          <p className='text-sm text-gray-500 mt-1'>Candolim, Goa</p>
          <p className='text-sm text-gray-500'>⭐ 3 • Like a 3★</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-b'>
        <div>
          <p className='text-xs text-gray-500'>CHECK-IN</p>
          <p className='text-sm font-medium text-gray-800'>
            10 Nov 2025, Mon 3 PM
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500'>CHECK-OUT</p>
          <p className='text-sm font-medium text-gray-800'>
            11 Nov 2025, Tue 11 AM
          </p>
        </div>
        <div>
          <p className='text-xs text-gray-500'>Guests</p>
          <p className='text-sm font-medium text-gray-800'>2 Adults</p>
        </div>
      </div>

      {/* Room Info */}
      <div className='py-4 border-b'>
        <h4 className='text-sm font-semibold text-gray-800 mb-2'>
          1 BHK Apartment with Private Balcony - 5
        </h4>
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
            <li>Passport, Aadhaar, Driving License, and Govt. ID accepted.</li>
            <li>Pets are not allowed.</li>
          </ul>
        </div>
      </div>

      {/* Price Section */}
      <div className='py-4 border-b'>
        <h4 className='text-sm font-semibold text-gray-800 mb-3'>
          Total Price
        </h4>
        <div className='space-y-2 text-sm text-gray-700'>
          <div className='flex justify-between'>
            <span>Base Price (1 Night)</span>
            <span>₹2,700</span>
          </div>
          <div className='flex justify-between text-green-600'>
            <span>Discount by Property</span>
            <span>- ₹270</span>
          </div>
          <div className='flex justify-between font-medium text-gray-800'>
            <span>Price after Discount</span>
            <span>₹2,430</span>
          </div>
          <div className='flex justify-between'>
            <span>Taxes & Service Fees</span>
            <span>₹231</span>
          </div>
          <div className='flex justify-between text-green-600'>
            <span>Promotion: MMTSMARTDEAL</span>
            <span>- ₹441</span>
          </div>
          <div className='flex justify-between border-t pt-2 font-semibold text-gray-900'>
            <span>Total Amount to be Paid</span>
            <span>₹2,220</span>
          </div>
        </div>
      </div>

      {/* Coupon Section */}
      <div className='py-4'>
        <h4 className='text-sm font-semibold text-gray-800 mb-2'>
          Coupon Codes
        </h4>
        <p className='text-sm text-gray-600'>
          MMTSMARTDEAL applied successfully!
        </p>
      </div>
    </div>
  );
}
