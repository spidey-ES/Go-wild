import Link from 'next/link';
import TourCards from './cards';

import TourCardModel from '../../lib/Model/tourcardData';
import { connectDb } from '../../lib/config/db';
import FadeContent from '../../../components/fade-content/fade';

interface DataofCards {
  id: number;
  _id: string;
  img: string;
  title: string;
  place: string;
  rating: number;
  price: number;
  days: number;
  persons: number;
}

export default async function Tour() {
  // const cardsData: DataofCards[] = [
  //   {
  //     id: 1,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761327780/maldives_hpd9on.jpg',
  //     title: 'Resorts',
  //   },
  //   {
  //     id: 2,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328360/beaches_aesa7k.jpg',
  //     title: 'Beaches',
  //   },
  //   {
  //     id: 3,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328822/fishing_bhybih.png',
  //     title: 'Fishing',
  //   },
  //   {
  //     id: 4,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328786/kayaking_xmqhz5.jpg',
  //     title: 'Kayaking',
  //   },
  //   {
  //     id: 5,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328478/paraglaiding_wtygm0.jpg',
  //     title: 'Paragliding',
  //   },
  //   {
  //     id: 6,
  //     img: 'https://res.cloudinary.com/dhc4jveqp/image/upload/v1761328460/mountain-trekking_y8rtx8.jpg',
  //     title: 'Mountain Trucking',
  //   },
  // ];
  await connectDb(); //fetchin data directly from database to server
  const cardsData: DataofCards[] = await TourCardModel.find();
  console.log(cardsData);

  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing='ease-out'
      initialOpacity={0}>
      <div>
        <div className='h-[60vh] md:h-screen flex flex-col items-center justify-center bg-[url("/greenMountions.png")] bg-cover bg-center px-4 text-center'>
          <div>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
              Explore Tour Places
            </h1>
            <ul className='flex flex-wrap justify-center mt-2'>
              <li className='text-white text-sm sm:text-lg md:text-xl'>
                <Link href='/'>{`Home >`}</Link>
              </li>
              <li className='text-white text-sm sm:text-lg md:text-xl ml-2 underline'>
                Tour
              </li>
            </ul>
          </div>
        </div>

        <div className='flex items-center justify-center bg-white py-10 sm:py-16 md:py-20 px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center'>
            {cardsData.map((each) => (
              <TourCards
                key={each.id}
                id={each.id}
                objId={each._id}
                img={each.img}
                title={each.title}
                place={each.place}
                rating={each.rating}
                price={each.price}
                days={each.days}
                persons={each.persons}
              />
            ))}
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
