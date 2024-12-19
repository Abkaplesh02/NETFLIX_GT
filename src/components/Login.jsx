import { useState } from "react"
import { BG_URL } from "../utils/constants"
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div >
        <Header/>
        <div className="absolute">
        <img src={BG_URL} alt="background" />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="p-12 bg-black  absolute w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && <input  type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 " />}
            <input  type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 " />
            <input  type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 "  />
            <p className="text-red-500 text-lg font-bold py-2 bg-opacity-40 bg-black"></p>
            <button  className="p-4 my-6 bg-red-700 w-full rounded-lg text-white" >{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p className="py-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
        </form>
    </div>
    )
}

export default Login;