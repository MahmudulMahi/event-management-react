import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";



const Details = () => {
  
  const event=useLoaderData();
  const {id,}=useParams()
  const events=event.find(events=>events.id ==id)
 
  console.log(events)
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="card  bg-base-100 shadow-xl mt-10">
  <figure><img className="w-2/4" src={events.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{events.title}</h2>
    <p>{events.description}</p>
    <div className="card-actions justify-end">
      
      <button className=""> </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Details;