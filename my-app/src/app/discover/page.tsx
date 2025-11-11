import { connectDb } from '@/lib/config/db';
import datesDataModel from '../../lib/Model/datesData';
import userModel from '@/lib/Model/userModel';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Calendar, User, Send, Home } from 'lucide-react';
import HotelModel from '@/lib/Model/hotelModel';
import FadeContent from '../../../components/fade-content/fade';

export default async function discover() {
  await connectDb();
  const data = await datesDataModel.find();
  console.log(data);
  const name = await userModel.find();
  const namelen = name.length - 1;

  const datalen = data.length - 1;
  console.log(datalen);

  const Accomidation = data[datalen].Accomidations;
  const placeData = data[datalen].place;

  const imagedata = await HotelModel.find({ place: placeData });
  console.log('this is total required data');
  console.log(imagedata);

  const userName = name[namelen].name;

  const recentDate = data[datalen].InDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing='ease-out'
      initialOpacity={0}>
      <div>
        <div className="h-[60vh] md:h-screen flex flex-col items-center justify-center bg-[url('/greenMountions.png')] bg-cover bg-center px-4 text-center">
          <div>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
              Discover More
            </h1>
            <ul className='flex flex-wrap justify-center mt-2'>
              <li className='text-white text-sm sm:text-lg md:text-xl'>
                <Link href='/'>{`Home >`}</Link>
              </li>
              <li className='text-white text-sm sm:text-lg md:text-xl ml-2 underline'>
                Discover
              </li>
            </ul>
          </div>
        </div>

        <div className='bg-white min-h-screen py-10 px-4 md:px-16'>
          <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='lg:col-span-2 space-y-6'>
              {[
                {
                  id: 1,
                  image: `${imagedata[0].AccomidationImg}`,
                  title: `${imagedata[0].hotelName}`,
                  accomidatgionType: `${Accomidation}`,
                  author: `${userName}`,
                  date: `${recentDate}`,
                  link: `/booking/${imagedata[0]._id}`,
                },
                {
                  id: 2,
                  image: `${imagedata[1].AccomidationImg}`,
                  title: `${imagedata[1].hotelName}`,
                  accomidatgionType: `${Accomidation}`,
                  author: `${userName}`,
                  date: `${recentDate}`,
                  link: `/booking/${imagedata[1]._id}`,
                },
                {
                  id: 3,
                  image: `${imagedata[2].AccomidationImg}`,
                  title: `${imagedata[2].hotelName}`,
                  accomidatgionType: `${Accomidation}`,
                  author: `${userName}`,
                  date: `${recentDate}`,
                  link: `/booking/${imagedata[2]._id}`,
                },
              ].map((blog) => (
                <div
                  key={blog.id}
                  className='flex flex-col md:flex-row bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100'>
                  <div className='relative md:w-2/5 h-48 md:h-auto'>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      priority
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover'
                    />
                  </div>
                  <div className='p-4 md:w-3/5 flex flex-col justify-center'>
                    <div className='flex items-center text-gray-500 text-sm gap-2 mb-1'>
                      <Calendar size={16} />
                      <span>{blog.date}</span>
                    </div>
                    <h2 className='text-lg font-semibold text-gray-900 mb-2 leading-snug'>
                      {blog.title}
                    </h2>
                    <div className='flex items-center gap-2 text-gray-600 mb-2 text-sm'>
                      <Home size={16} />
                      <span>{blog.accomidatgionType}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-600 mb-3 text-sm'>
                      <User size={16} />
                      <span>{blog.author}</span>
                    </div>
                    <Link
                      href={blog.link}
                      className='inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-full w-fit transition-all duration-300'>
                      <span>Book Now</span>
                      <Send size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR RECENT NEWS — */}
            <aside className='bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-fit'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-6 border-b pb-3 border-gray-200'>
                Recent News
              </h3>
              <div className='space-y-8'>
                {[
                  {
                    id: 1,
                    image: `${imagedata[3].AccomidationImg}`,
                    title: 'Quality Assurance Requirements Web Dev Risk Manage',
                    date: `${recentDate}`,
                  },
                  {
                    id: 2,
                    image: `${imagedata[4].AccomidationImg}`,
                    title: 'Design Wonders of the Modern Age',
                    date: `${recentDate}`,
                  },
                ].map((news) => (
                  <div
                    key={news.id}
                    className='flex gap-5 items-start hover:bg-gray-100 p-3 rounded-lg transition-all duration-300'>
                    <div className='relative w-36 h-28 flex-shrink-0 rounded-md overflow-hidden'>
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes='140px'
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='text-base font-semibold text-gray-800 leading-snug mb-1'>
                        {news.title}
                      </h4>
                      <div className='flex items-center gap-2 text-gray-500 text-sm mt-2'>
                        <Calendar size={16} />
                        <span>{news.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
