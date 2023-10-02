import { createRoot } from 'react-dom/client';
import './style.css';
const div = document.createElement('div');
div.id = '__root';
document.body.appendChild(div);

const rootContainer = document.querySelector('#__root');
if (!rootContainer) throw new Error("Can't find Options root element");
const root = createRoot(rootContainer);
root.render(
  <>
    <Content />
  </>
);

function Content() {
  return (
    <div className='fixed bottom-4 left-[20%] z-[9999] flex items-center gap-10 min-h-[156px]'>
      <div className='h-[156px] w-[156px] rounded border-4 border-[#E8E8E8] bg-[#B6B6B6] p-1 overflow-hidden hidden'>
        <video
          className='h-[158px] w-[158px] object-cover'
          height='156'
          width='156'
          src=''
          id='video-preview'
        ></video>
      </div>
      <div className='bg-[#141414] text-white flex items-center py-2 pr-6 pl-2 w-fit border-8 border-[#E8E8E8]'>
        <p className=' p-4 border-r border-white flex gap-2 items-center font-semibold text-xl'>
          <span id='current-time' className='block w-[76px]'>
            0:00:00
          </span>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='20'
              height='20'
              rx='10'
              fill='#C00404'
              fill-opacity='0.19'
            />
            <rect x='5' y='5' width='10' height='10' rx='5' fill='#C00404' />
          </svg>
        </p>
        <div className='flex gap-3 pl-6'>
          <button className='flex flex-col items-center text-xs font-bold text-white justify-between scale-75'>
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                fill='white'
              />
              <path
                d='M18 16.5L18 27.5'
                stroke='black'
                stroke-width='2'
                stroke-linecap='round'
              />
              <path
                d='M26 16.5L26 27.5'
                stroke='black'
                stroke-width='2'
                stroke-linecap='round'
              />
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                stroke='white'
              />
            </svg>
            Pause
          </button>
          <button
            className='flex flex-col items-center text-xs font-bold text-white justify-between scale-75'
            id='stopButton'
          >
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                fill='white'
              />
              <path
                d='M15.25 17.5C15.25 16.2574 16.2574 15.25 17.5 15.25H26.5C27.7426 15.25 28.75 16.2574 28.75 17.5V26.5C28.75 27.7426 27.7426 28.75 26.5 28.75H17.5C16.2574 28.75 15.25 27.7426 15.25 26.5V17.5Z'
                stroke='#0F172A'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                stroke='black'
              />
            </svg>
            Stop
          </button>
          <button
            className='flex flex-col items-center text-xs font-bold text-white justify-between scale-75'
            id='cameraButton'
          >
            <p className='relative'>
              <span id='camera-icon-wrapper'>
                {/* ${isCameraEnabled ? cameraOffIcon : cameraOnIcon} */}
              </span>
              <svg
                className='absolute bottom-0 right-0'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_597_1362)'>
                  <rect x='4' width='12' height='12' rx='2' fill='white' />
                  <path
                    d='M12.6399 7.01671L10.4665 4.84338C10.2099 4.58671 9.78986 4.58671 9.5332 4.84338L7.35986 7.01671'
                    stroke='black'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_597_1362'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_597_1362'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_597_1362'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </p>
            Camera
          </button>
          <button className='flex flex-col items-center text-xs font-bold text-white justify-between scale-75'>
            <p className='absolute'>
              <svg
                width='48'
                height='54'
                viewBox='0 0 48 54'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='0.5'
                  width='43'
                  height='43'
                  rx='21.5'
                  fill='white'
                />
                <path
                  d='M22 28.75C25.3137 28.75 28 26.0637 28 22.75V21.25M22 28.75C18.6863 28.75 16 26.0637 16 22.75V21.25M22 28.75V32.5M18.25 32.5H25.75M22 25.75C20.3431 25.75 19 24.4069 19 22.75V14.5C19 12.8431 20.3431 11.5 22 11.5C23.6569 11.5 25 12.8431 25 14.5V22.75C25 24.4069 23.6569 25.75 22 25.75Z'
                  stroke='#0F172A'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>

              <svg
                className='absolute bottom-0 right-0'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_d_597_1362)'>
                  <rect x='4' width='12' height='12' rx='2' fill='white' />
                  <path
                    d='M12.6399 7.01671L10.4665 4.84338C10.2099 4.58671 9.78986 4.58671 9.5332 4.84338L7.35986 7.01671'
                    stroke='black'
                    stroke-miterlimit='10'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_d_597_1362'
                    x='0'
                    y='0'
                    width='20'
                    height='20'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow_597_1362'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_dropShadow_597_1362'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </p>
            Mic
          </button>
          <button className='flex flex-col items-center text-xs font-bold text-white justify-between scale-75'>
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                fill='#4B4B4B'
              />
              <path
                d='M24.7404 19L24.3942 28M19.6058 28L19.2596 19M29.2276 15.7906C29.5696 15.8422 29.9104 15.8975 30.25 15.9563M29.2276 15.7906L28.1598 29.6726C28.0696 30.8448 27.0921 31.75 25.9164 31.75H18.0836C16.9079 31.75 15.9304 30.8448 15.8402 29.6726L14.7724 15.7906M29.2276 15.7906C28.0812 15.6174 26.9215 15.4849 25.75 15.3943M13.75 15.9563C14.0896 15.8975 14.4304 15.8422 14.7724 15.7906M14.7724 15.7906C15.9188 15.6174 17.0785 15.4849 18.25 15.3943M25.75 15.3943V14.4782C25.75 13.2988 24.8393 12.3142 23.6606 12.2765C23.1092 12.2589 22.5556 12.25 22 12.25C21.4444 12.25 20.8908 12.2589 20.3394 12.2765C19.1607 12.3142 18.25 13.2988 18.25 14.4782V15.3943M25.75 15.3943C24.5126 15.2987 23.262 15.25 22 15.25C20.738 15.25 19.4874 15.2987 18.25 15.3943'
                stroke='#BEBEBE'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <rect
                x='0.5'
                y='0.5'
                width='43'
                height='43'
                rx='21.5'
                stroke='black'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

var mediaRecorder;
var recorder;
var recordedChunks = [];
var wrapper;
var loader;
var timer;
var isCameraEnabled;
var isAudioEnabled;
var videoStream;
var screenStream;
