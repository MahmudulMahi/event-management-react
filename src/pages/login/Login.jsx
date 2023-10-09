
import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

  const {signIn,googleLogin}=useContext(AuthContext)
  const location=useLocation();
  const navigate=useNavigate();
  console.log(location)

  const handelLogin=e=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(form.get('password'))
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      console.log(result.user)
      navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
      console.error(error)
      toast("Email and Password does not match");
    })
  }
  const handelgooglelogin=(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(err=>{
      console.log(err)
      toast("wite few second")
  })

  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        
        <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handelLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control mt-6">
            <button onClick={()=>handelgooglelogin(googleLogin)} className="btn btn-primary">googleLogin</button>
          </div>
        </form>
        <p className="text-center">Dont have an account <Link to='/register' className="text-blue-400">Register</Link></p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;