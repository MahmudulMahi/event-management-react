import bannarpic from '../../assets/banner.jpg'


const Banner = () => {
  return (
    <div className='relative'>
      <img className='w-full relative opacity-50 ' src={bannarpic} alt="" />
    <div className=''>
    <p className='absolute top-48 left-0 bottom-0 right-0 text-center  text-b text-5xl hidden lg:block  '>Event Management <br/> <span className='text-yellow-600 '>Job & Career Fairs</span></p>
    <p className='absolute top-80 left-0 bottom-0 right-0 text-center text-3xl hidden lg:block '> Event management  for career fairs. The best event management  platform.</p>
    </div>

      {/* <div>
      <button className=" btn btn-ghost">Ghost</button>
      </div> */}
    </div>
  );
};

export default Banner;