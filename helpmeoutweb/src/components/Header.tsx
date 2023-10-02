import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/img/logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleModal = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className='px-5 md:px-[100px] py-3 fixed w-full bg-white'>
      <nav className='flex justify-between items-center'>
        <Link to='#hero' className='p-[10px] flex items-center space-x-2'>
          <img src={logo} alt='logo' className='w-10 h-10' />
          <span className='text-2xl font-inter font-bold text-primary'>
            Help Me out
          </span>
        </Link>
        <div className='py-[10px] pl-5 pr-[21px] hidden sm:flex items-center justify-center gap-[39px] font-medium font-work_sans leading-[18.77px] text-black'>
          <Link to='#features'>Features</Link>
          <Link to='#works'>How it Works</Link>
        </div>
        <Link
          to='/'
          className='py-3 px-[10px] hidden sm:block text-primary font-semibold text-lg leading-[22.68px] font-sora'
        >
          Get Started
        </Link>
        {toggle ? (
          <X
            className='block sm:hidden cursor-pointer'
            size={36}
            onClick={handleModal}
          />
        ) : (
          <Menu
            className='block sm:hidden cursor-pointer'
            size={36}
            onClick={handleModal}
          />
        )}

        {toggle && (
          <div className='fixed left-0 sm:hidden z-20 w-full min-h-full text-2xl font-bold text-center bg-white font-quicksand top-20 sidebar'>
            <ul className=' font-medium font-work_sans leading-[18.77px] text-black flex flex-col justify-center items-center gap-20 min-h-[80vh]'>
              <Link to='#features' onClick={handleModal}>
                Features
              </Link>
              <Link to='#works' onClick={handleModal}>
                How It Works
              </Link>
              <Link
                to='/'
                className='text-primary font-semibold text-lg leading-[22.68px] font-sora'
                onClick={handleModal}
              >
                Get Started
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
