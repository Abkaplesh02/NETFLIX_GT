import { useRef, useState } from "react"
import { BG_URL } from "../utils/constants"
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }

    const handleClick=()=>{
       const message= checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);

    

    if(message===null){
        //    SignUP/SignIN

        if(!isSignInForm){
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage);
    // ..
  });
        }
        else{
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" - "+errorMessage);
  });
        }
    }



    }
    return(
        <div >
        <Header/>
        <div className="absolute">
        <img src={BG_URL} alt="background" />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 " />}
            <input ref={email}  type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 " />
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "  />
            <p className="text-red-500 text-lg font-bold py-2 bg-opacity-40 bg-black">{errorMessage}</p>
            <button  className="p-4 my-6 bg-red-700 w-full rounded-lg text-white" onClick={handleClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
        </form>
    </div>
    )
}

export default Login;