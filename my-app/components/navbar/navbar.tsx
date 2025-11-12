'use client';
import Image from 'next/image';
import Link from 'next/link';
import batman from '../../public/batman-black.png';
import send from '../../public/send.png';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Navbar = () => {
  const path = usePathname();
  const currentPath = path !== '/register';
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const { data } = await axios.post('/api/auth/logout');
      if (data.success) {
        router.push('/register');
        router.refresh();
        toast.success('loggedout successfully');
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
    <nav className='fixed top-0 w-full bg-white shadow-md z-50'>
      <div className='w-full flex justify-between items-center px-5 h-[56px] max-w-7xl mx-auto'>
        <div className='flex items-center gap-2'>
          <Image src={batman} alt='batman' height={28} width={28} />
          <h1 className='text-black font-bold text-sm hover:text-green-600 cursor-pointer'>
            <Link href='/'>Go Wild</Link>
          </h1>
        </div>

        <ul className='hidden md:flex gap-6 font-medium text-gray-800 text-sm'>
          <li className='hover:text-green-600 cursor-pointer'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-green-600 cursor-pointer'>
            <Link href='/tour'>Tour</Link>
          </li>
          <li className='hover:text-green-600 cursor-pointer'>
            <Link href='/discover'>Hotels</Link>
          </li>
          <li className='hover:text-green-600 cursor-pointer'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center gap-2'>
          {/* {currentPath && (
            // <button
            //   className='text-xs bg-green-600 text-white  rounded-2xl py-1 px-3 hover:bg-amber-500'
            //   onClick={logoutHandler}>
            //   SignOut
            // </button>
          )} */}
          {currentPath && (
            <button
              onClick={logoutHandler}
              className='flex items-center justify-center gap-2 bg-amber-500 rounded-2xl px-3 py-1 text-xs font-medium text-white 
             hover:bg-amber-600 active:scale-95 
             transition-all duration-200 ease-in-out shadow-md hover:shadow-lg 
             w-[120px] h-[30px] cursor-pointer relative overflow-hidden group'>
              <span className='relative z-10 flex items-center gap-2'>
                LogOut
                <Image
                  src={send}
                  alt='send'
                  height={14}
                  width={14}
                  className='transition-transform duration-200 group-hover:translate-x-1'
                />
              </span>

              {/* Subtle hover flash overlay */}
              <span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300'></span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
