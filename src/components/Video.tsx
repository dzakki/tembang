import { useState } from 'react';

interface VideoProps {
  urlImage: string;
  urlVideo: string;
}

export default function Video({ urlImage, urlVideo }: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className='relative w-[100px] h-[100px]' onClick={() => setIsPlaying((prev) => !prev)}>
        <img
          src={urlImage || 'https://placehold.co/100x100'}
          alt='Rought Water'
          height={100}
          width={100}
          className='rounded-xl h-[100px] w-[100px] object-cover'
        />
        <div className={`absolute top-[35%] w-[36] left-[32%]  ${isPlaying ? 'hidden' : ''}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width='36'
            height='36'
            viewBox='0 0 36 36'
          >
            <defs>
              <filter
                id='v2dinylqja'
                width='152.5%'
                height='152.5%'
                x='-26.3%'
                y='-18.8%'
                filterUnits='objectBoundingBox'
              >
                <feOffset
                  dy='2'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                  stdDeviation='2'
                />
                <feColorMatrix
                  in='shadowBlurOuter1'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
                />
              </filter>
              <path
                id='0nydk4g5ob'
                d='M16 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667 2.667 8.64 2.667 16 8.64 29.333 16 29.333zm0-24c5.88 0 10.667 4.787 10.667 10.667S21.88 26.667 16 26.667 5.333 21.88 5.333 16 10.12 5.333 16 5.333zM13.333 10v12l8-6-8-6z'
              />
            </defs>
            <g
              fill='none'
              fillRule='evenodd'
            >
              <g>
                <g>
                  <path
                    d='M0 0L32 0 32 32 0 32z'
                    transform='translate(-58.000000, -202.000000) translate(60.000000, 202.000000)'
                  />
                  <path
                    fill='#000'
                    fillRule='nonzero'
                    d='M16 26.667c5.88 0 10.667-4.787 10.667-10.667S21.88 5.333 16 5.333 5.333 10.12 5.333 16 10.12 26.667 16 26.667zM13.333 10l8 6-8 6V10z'
                    opacity='.3'
                    transform='translate(-58.000000, -202.000000) translate(60.000000, 202.000000)'
                  />
                  <g
                    fillRule='nonzero'
                    transform='translate(-58.000000, -202.000000) translate(60.000000, 202.000000)'
                  >
                    <use
                      fill='#000'
                      filter='url(#v2dinylqja)'
                      xmlnsXlink='#0nydk4g5ob'
                    />
                    <use
                      fill='#FFF'
                      xmlnsXlink='#0nydk4g5ob'
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {isPlaying && (
        <video
          className='hidden'
          width='100'
          height={100}
          controls
          autoPlay
          onClick={() => setIsPlaying(false)}
        >
          <source
            src={urlVideo}
            type='video/mp4'
          />
          Your browser does not support HTML video.
        </video>
      )}
    </>
  );
}

