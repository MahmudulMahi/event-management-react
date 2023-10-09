import { Link } from "react-router-dom";


const Eventcart = ({event}) => {
  const{title,image,thumbnail,description,id,price}=event
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img className="w-96 h-60" src={image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p> price:{price}</p>
      
        {
          description.length >100 ? <p>{description.slice(0,100)} <Link
          to={`/event/${id}`}
           className="text-yellow-500 bg-slate-500 btn">show details</Link></p>
          :<p>{description}</p>
        }
     
      {/* <div className="card-actions justify-end">
        <button className="btn btn-primary">View Details</button>
      </div> */}
    </div>
  </div>
  );
};

export default Eventcart;