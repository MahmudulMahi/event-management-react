import bannarpic from '../../assets/banner.jpg'


const Banner = () => {
  return (
    <div className='relative'>
      <img className='w-full relative opacity-50 ' src={bannarpic} alt="" />
      <p className='absolute top-60 text-center text-white text-5xl z-50'>Career Fair event solutions empower event creators to manage events, training and venues more efficiently.</p>

      {/* <div>
      <button className=" btn btn-ghost">Ghost</button>
      </div> */}
    </div>
  );
};

export default Banner;