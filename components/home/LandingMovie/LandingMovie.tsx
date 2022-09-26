import Image from 'next/image';
import { PropsType } from './types';

const LandingMovie: React.FC<PropsType> = (props) => {
  return (
    <div className='w-full h-108 md:h-150 relative'>
      <Image
        src={props.movie.poster}
        alt=''
        className='w-full h-full object-cover'
        layout='fill'
      />
      <div
        id={'landing-poster-' + props.movie.id}
        className='absolute top-36 left-9 flex gap-x-4 pr-14'
      >
        <span className='border-2 border-white w-14 h-0 mt-5'></span>
        <div id={'quote-' + props.movie.id}>
          <p className=' font-montserrat text-xl md:text-3xl font-bold leading-8 text-white'>
            {props.movie.quote}
          </p>
          <span className='font-neue font-bold leading-6 text-base text-white mt-3'>
            {props.movie.title}, {props.movie.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingMovie;
