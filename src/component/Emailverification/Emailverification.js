import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const Emailverification = () => {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if(user&&user.emailVerified==true){
     navigate("/")
  }
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Email verification</h1>
            <p class="py-10">Check your inbox for the next steps. If you don't receive an email, and it's not in your spam folder this could mean you signed up with a different address.</p>
            <h1 class="text-2xl font-bold text-red-600">After complite verification please reload page</h1>
            <a
            href="#!"
            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            ><NavLink to="/singin">Sing In</NavLink></a>  or 
             <a
            href="#!"
            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            ><NavLink to="/registation">Sing Up</NavLink></a>
          </div>
        </div>
      </div>
    );
};

export default Emailverification;