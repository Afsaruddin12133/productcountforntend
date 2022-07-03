import { useState } from "react";
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import Loading from "../../sharedcomponent/Loading/Loading";
import Facebook from "../../sharedcomponent/Social/Facebook";
import Google from "../../sharedcomponent/Social/Google";

const Singin = () => {
  //state
  const [email,setEmail] = useState({value:"",error:""})
  const [password,setPassword] = useState({value:"",error:""})
  //firebace hooks
  const [signInWithEmailAndPassword, user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const [updatePassword, updating, uperror] = useUpdatePassword(auth);
 // loading
   if(loading || updating){
    return <Loading/>
   }
    return (
        <section class="h-screen mb-18">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"}
                class="w-full"
                alt="Phone image"
                
              />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form className="rounded-lg shadow-lg p-5">
              <h1 class="text-4xl font-bold mt-0 mb-6">Sing In</h1>
                <div class="mb-6">

                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    id="email"
                    autoComplete="off"
                    onBlur={(e)=>setEmail({value:e.target.value,error:""})}
                    required
                  />
                   
                </div>
      
             
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    id="password"
                    autoComplete="off"
                    onBlur={(e)=>setPassword({value:e.target.value,error:""})}
                    required
                  />
                   
                </div>
      
                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                      >Remember me</label
                    >
                  </div>
                  <a
                  onClick={async()=> {
                    await updatePassword(email)
                    await toast("Updated Password chack your email")
                  }}
                    href="#!"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?</a>
                </div>
      
             
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={async(e)=>{
                  e.preventDefault();
                   await signInWithEmailAndPassword(email.value, password.value)
                   .then(async(user)=>{
                   await toast("Sing in sucessfull");
                   })
                   .then(async(error)=>{
                    await toast(error.massage);
                   })
                   document.getElementById("email").value = "";
                   document.getElementById("password").value = "";
                  }}>
                  Sign in
                </button>
                <Facebook/>
                <Google/>
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                href="#!"
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                ><NavLink to="/registation">Register</NavLink></a
              >
            </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Singin;