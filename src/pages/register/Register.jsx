
import { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~]).{6,}$/;


const Register = () => {
 

  const [passwordError, setPasswordError] = useState('');

  const {createUser} =useContext(AuthContext)
  const handelRegister=e=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email = form.get('email')
    const photo = form.get('photo')
    const name = form.get('name')
    const password = form.get('password')
    console.log(email, password, photo, name)

    if (!passwordRegex.test(password)) {
      setPasswordError('password that is at least 6 characters long and contains at least one uppercase letter and least one special character..');
      return;
    }

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      // addToast('Registration successful!', { appearance: 'success' });
      
      toast("Registration successful!");

     
    })
    .catch(error=>{
      console.error(error)
      
    })
    
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <p className='text-center'> {passwordError && <p className="text-red-500">{passwordError}</p>}</p>
       
        <form onSubmit={handelRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
          </div>
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
            <button type="submit" className="btn btn-primary"> Register </button>
          </div>
        </form>
        <p className="text-center">Already have account <Link to='/login' className="text-blue-400">Login</Link></p>
      </div>
      <ToastContainer />
    </div>
     
  );
};

export default Register;