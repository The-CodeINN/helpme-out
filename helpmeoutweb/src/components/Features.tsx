import record from '../assets/img/record.svg';
import videoRepo from '../assets/img/Video Repository.png';

const Features = () => {
  return (
    <section
      className='bg-white flex flex-col justify-center items-center gap-[64px] py-20 px-5 md:px-[100px] mt-14 mb-[70px]'
      id='features'
    >
      <div className='text-center'>
        <h2 className='heading'>Features</h2>
        <p className='paragraph'>Key Highlights of Our Extension</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-[56px]'>
        <div className='flex flex-col items-center gap-12'>
          <div className='flex items-start gap-4'>
            <img
              src={record}
              alt='record'
              width={48}
              height={48}
              className='w-auto h-auto'
            />
            <div>
              <p className='subHeading'>Simple Screen Recording</p>
              <p className='paragraph pt-2'>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img
              src={record}
              alt='record'
              width={48}
              height={48}
              className='w-auto h-auto'
            />
            <div>
              <p className='subHeading'>Easy-to-Share URL</p>
              <p className='paragraph pt-2'>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img
              src={record}
              alt='record'
              width={48}
              height={48}
              className='w-auto h-auto'
            />
            <div>
              <p className='subHeading'>Revisit Recordings</p>
              <p className='paragraph pt-2'>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <img
          src={videoRepo}
          alt='videoRepo'
          width={636}
          height={454}
          className='w-auto h-auto'
        />
      </div>
    </section>
  );
};

export default Features;
