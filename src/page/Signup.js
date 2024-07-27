import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/google-logo.svg"
import Cookies from "js-cookie";
import axios from "axios";

const SignUP = () => {

   const handleSignUp = async (event) => {
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
       console.log(email,password,name);
       const values= {
        email,password,name
       }
       try {
        const res = await axios.post("http://localhost:5000/signup", values);
        console.log(res);
            Cookies.set(
                "userDataLogin",
                JSON.stringify({ email, password , name }),
                { expires: 1 }
              );
       }
       catch(err) {
        console.log(err);

       }
   }
  

    return (  

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold hover:text-blue-700 transition-all ease-in ">Sign Up Form</h1>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="relative">
                                    <input  id="name" name="name" type="text" className="peer rounded h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400" placeholder="Full name" />    
                                </div>
                                <div class="relative">
                                    <input  id="email" name="email" type="text" className="peer rounded h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400" placeholder="Email address" />    
                                </div>
                                <div class="relative">
                                    <input  id="password" name="password" type="password" className="peer rounded h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400" placeholder="Password" />
                                   
                                </div>
                                <p>If you have an account. Please <Link to="/login" className="text-blue-600 underline">Login</Link> Here </p>
                                <div class="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div  className="flex w-full items-center flex-col mt-5 gap-3">
                            <button className="block"> <img src={GoogleLogo} alt="" className="w-12 h-12 inline-block"/>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SignUP;