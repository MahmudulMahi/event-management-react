
import { AiFillCalendar,AiOutlineAntDesign,AiTwotoneRocket,AiOutlineFieldTime,AiFillLock,AiFillAlipaySquare,AiFillCheckSquare, AiOutlineAccountBook} from "react-icons/ai";
const Feature = () => {
  return (
    <div>
      <h2 className="text-center text-4xl">Features</h2>

      <div className="grid grid-cols-4 gap-5">
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiFillCalendar className="text-5xl"></AiFillCalendar></h2>
          <p>Events Calendars & Listings</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiOutlineAntDesign className="text-5xl"></AiOutlineAntDesign></h2>
          <p>Design & Customizations</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiTwotoneRocket className="text-5xl"></AiTwotoneRocket></h2>
          <p>Event Publishing</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiOutlineFieldTime className="text-5xl"></AiOutlineFieldTime></h2>
          <p>Room Scheduling</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiFillLock className="text-5xl"></AiFillLock></h2>
          <p>Security Privacy & Accessibility</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiFillAlipaySquare className="text-5xl"></AiFillAlipaySquare></h2>
          <p>Event Promotion & Distribution</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiFillCheckSquare className="text-5xl"></AiFillCheckSquare></h2>
          <p>Event Registration & Ticketing</p>
         
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title "><AiOutlineAccountBook className="text-5xl"></AiOutlineAccountBook></h2>
          <p>Events OPerations & Analytics</p>
         
        </div>
      </div>
        
      </div>

    </div>
  );
};

export default Feature;