import { Link } from 'react-router-dom';
import footerLogo from '../assets/img/footer-logo.svg';

const Footer = () => {
  const footerData = [
    {
      title: 'Menu',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Converter', href: '/' },
        { text: 'How it Works', href: '#works' },
      ],
    },
    {
      title: 'About us',
      links: [
        { text: 'About', href: '/' },
        { text: 'Contact Us', href: '/' },
        { text: 'Privacy Policy', href: '/' },
      ],
    },
    {
      title: 'Screen Record',
      links: [
        { text: 'Browser Window', href: '/' },
        { text: 'Desktop', href: '/' },
        { text: 'Application', href: '/' },
      ],
    },
  ];

  return (
    <footer className='bg-primary px-5 md:px-[130px] py-[98px] flex flex-col items-center md:flex-row md:items-start sm:gap-20 sm:justify-between w-full'>
      <div>
        <img
          src={footerLogo}
          alt='Footer Logo'
          width={157}
          height={60}
          className='w-auto h-auto'
        />
      </div>
      <div className='flex flex-col sm:flex-row gap-10 text-center sm:text-left md:w-[67%] md:justify-between text-white pt-10 sm:pt-0'>
        {footerData.map((data, index) => (
          <div key={index} className='flex flex-col gap-[26px]'>
            {data.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                to={link.href}
                className='font-normal font-work_sans leading-[18.77px]'
              >
                {link.text}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
