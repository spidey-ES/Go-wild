import Link from 'next/link';
import { connectDb } from '@/lib/config/db';
import TourCardModel from '@/lib/Model/tourcardData';
import Image from 'next/image';
import PercentageCircle from '../../../../components/percentage/page';
import Book from './book';
import FadeContent from '../../../../components/fade-content/fade';

// interface SpecificCardType {
//   id: number;
//   img: string;
//   title: string;
//   place: string;
//   rating: number;
//   price: number;
//   days: number;
//   persons: number;
// }

await connectDb();
async function specificDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const specificItem = id;
  const specificData = await TourCardModel.findById(specificItem);
  const totalPersons = specificData.persons;
  console.log(specificData);
  console.log(`total persons`, totalPersons);

  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing='ease-out'
      initialOpacity={0}>
      <div className=''>
        <div className='h-[60vh] md:h-screen flex flex-col items-center justify-center bg-[url("/mountains.png")] bg-cover bg-center px-4 text-center'>
          <div>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
              Explore Tour Places
            </h1>
            <ul className='flex flex-wrap justify-center mt-2'>
              <li className='text-white text-sm sm:text-lg md:text-xl'>
                <Link href='/'>{`Home >`}</Link>
              </li>
              <li className='text-white text-sm sm:text-lg md:text-xl ml-2 underline'>
                Destination Details
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='bg-white min-h-screen'>
        <div className='  flex flex-col items-center '>
          <div className='flex flex-col items-center mt-6 px-4 sm:px-6 md:px-8'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-5 gap-10'>
              <div className='relative h-[300px] w-full sm:h-[400px] md:h-[450px] md:w-[420px] max-w-md'>
                <Image
                  src={specificData.img}
                  alt='img'
                  fill
                  className='object-cover border rounded-t-2xl'
                />
              </div>

              <div className='max-w-md text-center md:text-left'>
                <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 mb-3 w-[150px] h-[30px]'>
                  {specificData.title}
                </button>
                <h1 className='text-xl sm:text-xl font-semibold'>
                  {specificData.title}
                </h1>
                <p className='text-xl sm:text-xl  text-gray-500'>
                  {specificData.place}
                </p>
                <p className='text-sm sm:text-xl  text-gray-500'>
                  {`★★★★★ (${specificData.rating})`}
                </p>
                <p className='text-sm mt-3'>
                  {`Visit your favourite destination — ${specificData.title} — and enjoy the journey of your life with your loved ones. Feel the nature, cherish the beauty, and make every moment unforgettable.`}
                </p>

                <div className='flex justify-center md:justify-start'>
                  <div className='flex gap-8 mt-4  p-6 w-60 shadow-xl rounded-md'>
                    <div>
                      <PercentageCircle percentage={90} />
                      <h1 className='text-center text-xs sm:text-sm mt-2'>
                        satisfaction
                      </h1>
                    </div>
                    <div>
                      <PercentageCircle percentage={93} size={80} />
                      <h1 className='text-center text-xs sm:text-sm mt-2'>
                        Liked
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Book />
          </div>
        </div>

        <div></div>
      </div> */}
        <div className='bg-white min-h-screen'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center mt-6 px-4 sm:px-6 md:px-8'>
              <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-5 gap-10'>
                <div className='relative h-[300px] w-full sm:h-[400px] md:h-[450px] md:w-[420px] max-w-md'>
                  <Image
                    src={specificData.img}
                    alt='img'
                    fill
                    className='object-cover border rounded-t-2xl'
                  />
                </div>

                <div className='max-w-md text-center md:text-left'>
                  <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 mb-3 w-[150px] h-[30px]'>
                    {specificData.title}
                  </button>
                  <h1 className='text-xl sm:text-xl font-semibold'>
                    {specificData.title}
                  </h1>
                  <p className='text-xl sm:text-xl text-gray-500'>
                    {specificData.place}
                  </p>
                  <p className='text-sm sm:text-xl text-gray-500'>
                    {`★★★★★ (${specificData.rating})`}
                  </p>
                  <p className='text-sm mt-3'>
                    {`Visit your favourite destination — ${specificData.title} — and enjoy the journey of your life with your loved ones. Feel the nature, cherish the beauty, and make every moment unforgettable.`}
                  </p>

                  <div className='flex justify-center md:justify-start'>
                    <div className='flex gap-8 mt-4 p-6 w-60 shadow-xl rounded-md'>
                      <div>
                        <PercentageCircle percentage={90} />
                        <h1 className='text-center text-xs sm:text-sm mt-2'>
                          satisfaction
                        </h1>
                      </div>
                      <div>
                        <PercentageCircle percentage={93} size={80} />
                        <h1 className='text-center text-xs sm:text-sm mt-2'>
                          Liked
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-center md:justify-start mt-6'>
                    <Book
                      totalPersons={totalPersons}
                      specificItem={specificItem}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-7 '>
            <h1 className='text-xl font-bold '>{`why choose ${specificData.place}`}</h1>
            <p className='text-md  text-wrap '>
              {` We admire the serene beauty of  ${specificData.place}, where crystal
            waters meet endless skies and time seems to rest. Yet many,
            enchanted by luxury’s charm, forget that true travel is about
            finding peace within. Those who seek only comfort may miss what the
            ocean truly offers — calmness, clarity, and reflection that endure
            long after the journey ends.`}
            </p>
            <div className='flex gap-5 mt-3 justify-center md:justify-start'>
              <ul className='flex gap-3 cursor-pointer'>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-3 shadow-er:text-whitexl hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>family Camping</Link>
                </li>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-3 shadow-xl  hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>fishing</Link>
                </li>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-6 shadow-xl hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>luxury Camping</Link>
                </li>
              </ul>
              <ul className='flex gap-3 cursor-pointer'>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-3 shadow-xl hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>wild Camping</Link>
                </li>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-6 shadow-xl hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>Pleasent Nature</Link>
                </li>
                <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 skew-3 shadow-xl hover:bg-black hover:text-white'>
                  <Link href={'/tour'}>couple Camping</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}

export default specificDetail;
