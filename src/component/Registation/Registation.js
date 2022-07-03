import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import Loading from "../../sharedcomponent/Loading/Loading";
import Facebook from "../../sharedcomponent/Social/Facebook";
import Google from "../../sharedcomponent/Social/Google";


const Registation = () => {
  let navigate = useNavigate();
    // stats...
  const [fastname,setFastname] = useState({value:"",error:""});
  const [lastname,setLastname] = useState({value:"",error:""});
  const [email,setEmail] = useState({value:"",error:""});
  const [password,setPassword] = useState({value:"",error:""});
  const displayName = fastname + lastname;
  // firebase hooks
  const [createUserWithEmailAndPassword,user, loading,error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
 // loading 
 if(loading){
    return <Loading/>;
  }
  // verification
 return (
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mt-20 mb-20 m-auto">
        <h1 class="text-4xl font-bold mt-0 mb-6">Sing Up</h1>
    <form >
    <div class="grid grid-cols-2 gap-4">
  <div class="form-group mb-6">
    <input type="text" autoComplete="off" 
    onBlur={(e)=>{
        if(/^[A-Z]+/.test(e.target.value)){
            setFastname({value:e.target.value,error:""})
        }
        else{
            setFastname({value:"",error:"Begin with capital letter"})
        }
    }}
    class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
      aria-describedby="emailHelp123" placeholder="First name" required/>
      <label class="label">
    <span class="label-text-alt text-red-600">{fastname.error}</span>
  </label>
  </div>
  <div class="form-group mb-6">
    <input type="text" autoComplete="off" 
    onBlur={(e)=>
        {
            if(/^[A-Z]+/.test(e.target.value)){
                setLastname({value:e.target.value,error:""})
            }
            else{
                setLastname({value:"",error:"Begin with capital letter"})
            }
        }
    }
    class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
      aria-describedby="emailHelp124" placeholder="Last name" required/>
      <label class="label">
    <span class="label-text-alt text-red-600">{lastname.error}</span>
  </label>
  </div>
</div>
<div class="form-group mb-6">
  <input type="email" autoComplete="off" 
  onBlur={(e)=>
    {
        if(/^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+.)+[a-z]{2,5}$/.test(e.target.value)){
            setEmail({value:e.target.value,error:""})
        }
        else{
            setEmail({value:"",error:"Your email is invalid"})
        }
    }
}
  class="form-control block 
    w-full
    px-3 
    py-1.5 
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
    placeholder="Email address" required/>
    <label class="label">
    <span class="label-text-alt text-red-600">{email.error}</span>
  </label>
</div>
<div class="form-group mb-6">
  <input type="password" autoComplete="off" 
  onBlur={(e)=>
    {
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e.target.value)){
            setPassword({value:e.target.value,error:""})
        }
        else{
            setPassword({value:"",error:"Please must enter 8 char 1 letter 1 number 1 special char"})
        }
    }
}
  class="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700 
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
    placeholder="Password" required/>
    <label class="label">
    <span class="label-text-alt text-red-600">{password.error}</span>
  </label>
</div>

<button type="submit" 
onClick= {async(e)=>{
    e.preventDefault();
  await createUserWithEmailAndPassword(email.value, password.value)
    .then(async(user)=>{
      await navigate("/email",{ replace: true })
       await toast.success("User create sucessful");
    })
    .catch(async(error)=>{
     await toast.error("User created failed");
    })


}}
class="
  w-full
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out">Sign up</button>
  <Facebook/>
  <Google/>
  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
          you have already account?
          <a
            href="#!"
            class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            ><NavLink to="/singin">Login</NavLink></a>
        </p>
</form>
</div>
    );
};

export default Registation;