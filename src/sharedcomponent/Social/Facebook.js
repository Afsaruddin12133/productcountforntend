import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import Loading from '../Loading/Loading';


const Facebook = () => {
  const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
  if(loading){
    return <Loading/>
  }
    return (
       <div>
         <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
      >
        <p class="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <a
      onClick={async()=>{
        await signInWithFacebook()
        .then(async()=>{
          toast("Facebook Sing in sucessfull")
        })
        .catch(async(error)=>{
        await toast(error.massage)
        })
      }}
        class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <a href="#!" role="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-7 h-7" style={{color: "white",marginRight:"10px"}}><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
  </a>Continue with Facebook
      </a>
       </div>
      
    );
};

export default Facebook;