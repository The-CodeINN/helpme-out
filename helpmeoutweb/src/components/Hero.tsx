import { MoveRight } from 'lucide-react';
import heroImage from '../assets/img/hero-image.png';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section
      className='bg-white md:pr-[51.5px] md:pl-[100px] px-5 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-[14px] pt-20 pb-24'
      id='#hero'
    >
      <div className='flex flex-col gap-12 items-start max-w-[548px]'>
        <div>
          <h1 className='font-sora text-5xl sm:text-[64px] leading-[64px] font-bold'>
            Show Them Don’t Just Tell
          </h1>
          <p className='pt-5 font-sans text-xl font-normal text-black text-opacity-75'>
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <Button className='px-6 py-8 bg-primary rounded-lg text-white font-work_sans font-medium text-lg leading-[21.11px]'>
          Install Help Me Out
          <MoveRight className='inline-block ml-3 font-medium' size={24} />
        </Button>
      </div>
      <img src={heroImage} alt='Hero' width={727} height={594.08} />
    </section>
  );
};

export default Hero;
