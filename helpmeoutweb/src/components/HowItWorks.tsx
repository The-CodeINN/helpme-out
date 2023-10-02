import works from '../assets/img/works.png';

const HowItWorks = () => {
  return (
    <section
      className='bg-white flex flex-col justify-center items-center gap-[59px] px-5 md:px-[100px] pt-[103px] pb-[118px]'
      id='works'
    >
      <h2 className='heading'>How it works</h2>
      <div className='flex flex-col md:flex-row gap-[83px]'>
        <div className='max-w-[358px] flex flex-col items-center gap-7'>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-primary px-[23px] py-[14px] border rounded-[60px]'>
              1
            </p>
            <p className='subHeading mt-8'>Record Screen</p>
            <p className='paragraph mt-4'>
              Click the &ldquo;Start Recording&rdquo; button in our extension.
              choose which part of your screen to capture and who you want to
              send it to.
            </p>
          </div>
          <img
            src={works}
            alt='Works'
            width={357}
            height={268}
            className='w-auto h-auto'
          />
        </div>
        <div className='max-w-[358px] flex flex-col items-center gap-7'>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-primary px-[23px] py-[14px] border rounded-[60px]'>
              2
            </p>
            <p className='subHeading mt-8'>Share Your Recording</p>
            <p className='paragraph mt-4'>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <img
            src={works}
            alt='Works'
            width={357}
            height={268}
            className='w-auto h-auto'
          />
        </div>
        <div className='max-w-[358px] flex flex-col items-center gap-7'>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='font-sans text-[32px] font-bold leading-[38.73px] text-center w-[67px] h-[67px] text-white bg-primary px-[23px] py-[14px] border rounded-[60px]'>
              3
            </p>
            <p className='subHeading mt-8'>Record Screen</p>
            <p className='paragraph mt-4'>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
          <img
            src={works}
            alt='Works'
            width={357}
            height={268}
            className='w-auto h-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
