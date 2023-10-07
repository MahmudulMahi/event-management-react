
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Banner from '../../components/banner/Banner';
import Eventcart from './Eventcart.jsx/Eventcart';

const Home = () => {
  const event=useLoaderData()
  console.log(event)
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
      <h2 className='text-5xl text-center mt-5'>our services</h2>
        <p className='text-center mb-16'>Our expert Professional & Managed Event Services team is here to support <br/>  you at every step because your success is our success. </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      
        {
          event.map(aevent => <Eventcart key={aevent.id} event={aevent}></Eventcart>)
        }
      </div>
      
    </div>
  );
};

export default Home;