import aboutpic from '../../assets/images (2).jpg'
import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <>
  <Navbar></Navbar>
    <div className='flex gap-5 mt-10'>

      <div>
        <img className='w-[700px] ' src={aboutpic} alt="" />
      </div>

      <div className='w-[500px]'>
        <h2 className='font-bold text-3xl mb-10'>Timely’s Vision is to Bring the World Closer Together, One Event at a Time.</h2>

        <p>We believe an event calendar is the first step in bringing communities together and turning events into lifelong memories. We aim to be the best software company there is, for our employees, clients and the community.We decided to turn these individual event calendars into distribution and promotional platforms, remodelling the traditional calendar into a social network that users can easily publish and search for events.</p>
      </div>

    </div>
    </>
  );
};

export default About;