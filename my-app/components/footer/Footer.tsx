// app/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-[#1D231F] flex flex-col items-center justify-center py-20 w-full'>
      <div className='flex flex-col md:flex-row justify-around items-center w-full max-w-7xl px-6 md:px-10 gap-6'>
        <div className='flex items-center text-center md:text-left'>
          <Image
            src='/onlinesupport.png'
            alt='online-support'
            width={60}
            height={60}
          />
          <div className='gap-2 p-2'>
            <h1 className='text-gray-400 font-bold text-lg md:text-xl'>
              Need Any Support for Tours <br className='hidden sm:block' /> &
              Travels ?
            </h1>
          </div>
          <div className='p-3'>
            <Link href='/contact'>
              <button
                className='
                  flex items-center justify-center
                  bg-gray-100 text-black
                  rounded-full shadow-md
                  w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10
                  hover:bg-green-500 hover:text-white 
                  hover:scale-110 transition-all duration-300
                  whitespace-nowrap cursor-pointer
                '>
                {`-->`}
              </button>
            </Link>
          </div>
        </div>

        <div className='flex items-center text-center md:text-left'>
          <Image src='/vacation.png' alt='vacation' width={60} height={60} />
          <div className='gap-2 p-2'>
            <h1 className='text-gray-400 font-bold text-lg md:text-xl'>
              Ready to get Started with <br className='hidden sm:block' />{' '}
              vacations !
            </h1>
          </div>
          <div className='p-3'>
            <Link href={'/tour'}>
              <button
                className='flex items-center justify-center
                bg-gray-100 text-black
                rounded-full shadow-md
                w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10
                hover:bg-green-500 hover:text-white 
                hover:scale-110 transition-all duration-300
                whitespace-nowrap cursor-pointer'>
                {`-->`}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-8 w-full max-w-7xl px-6'>
        <hr className='border-t-2 border-gray-600' />
      </div>

      <div className='flex flex-col md:flex-row justify-between md:justify-around mt-6 w-full max-w-7xl px-6 md:px-10 gap-10'>
        <div className='flex flex-col items-center md:items-start'>
          <div className='p-2 text-center md:text-left'>
            <h1 className='text-gray-400 font-bold'>About</h1>
            <h1 className='text-white text-sm mt-2'>
              Exploring the world is not just about{' '}
              <br className='hidden sm:block' /> places, it’s about the stories{' '}
              <br className='hidden sm:block' /> we collect
            </h1>
          </div>
          <div className='flex items-center p-2 justify-center md:justify-start'>
            <Image src='/batman-gray.png' alt='batman' height={40} width={40} />
            <h1 className='text-white font-bold text-md hover:text-green-600 cursor-pointer ml-2'>
              Go Wild
            </h1>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start p-2'>
          <h1 className='text-gray-400 font-bold'>Services</h1>
          <ul className='text-white text-xs mt-1 font-semibold text-center md:text-left'>
            <li className='mb-2 hover:text-green-600'>Caravan Solar Tent</li>
            <li className='mb-2 hover:text-green-600'>Family Tent Camping</li>
            <li className='mb-2 hover:text-green-600'>Classic Tent Camping</li>
            <li className='mb-2 hover:text-green-600'>Wild Tent Camping</li>
            <li className='mb-2 hover:text-green-600'>Small Cabin Wood</li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-start p-2'>
          <ul className='text-white text-xs mt-3 font-semibold text-center md:text-left'>
            <li className='mb-2 hover:text-green-600'>Need a Career ?</li>
            <li className='mb-2 hover:text-green-600'>Latest News and Blogs</li>
            <li className='mb-2 hover:text-green-600'>Core Features</li>
            <li className='mb-2 hover:text-green-600'>Meet our Team</li>
            <li className='mb-2 hover:text-green-600'>Explore More</li>
          </ul>
        </div>

        <div className='flex flex-col items-center md:items-start p-2 max-w-sm'>
          <h1 className='text-gray-400 font-bold text-xl'>Newsletter</h1>
          <h1 className='text-white text-sm mt-2 text-center md:text-left'>
            Wander often, wonder always <br className='hidden sm:block' />{' '}
            subscribe for travel stories <br className='hidden sm:block' />{' '}
            straight to your inbox
          </h1>
          <input
            type='text'
            placeholder='Enter your email'
            className='w-full text-xs text-white font-extralight border p-2 rounded-2xl border-white focus:outline-none mt-3 bg-transparent placeholder-gray-300'
          />
        </div>
      </div>

      <div className='mt-8 w-full max-w-7xl px-6'>
        <hr className='border-t-2 border-gray-600' />
      </div>
    </footer>
  );
};

export default Footer;
