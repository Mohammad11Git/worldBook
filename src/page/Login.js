import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/google-logo.svg";
import { Spinner } from "flowbite-react";
import axios from "axios";

const Login = () => {
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues =
    Cookies.get("userDataLogin") && JSON.parse(Cookies.get("userDataLogin"));
  const [email, setEmail] = useState(initialValues?.email);
  const [password, setPassword] = useState(initialValues?.password);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(email, password);
    if (email === "admin@gmail.com" && password === "admin") {
      setTimeout(() => {
        router("/admin/dashboard");
      }, 1000);
    } else {
      try {
        const res = await axios.post("http://localhost:5000/login/", {
          email: email,
          password: password,
        });
        console.log(res.data.user);
        Cookies.set("token", res.data.token, { expires: 30 });
        Cookies.set("userInfo", JSON.stringify(res.data.user), {
          expires: 30,
        });
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        Cookies.remove("userDataLogin");
        router("/");
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold hover:text-blue-700 transition-all ease-in">
                Log in Form
              </h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    id="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="text"
                    className="peer rounded h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400"
                    placeholder="Email address"
                  />
                </div>
                <div class="relative">
                  <input
                    id="password"
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    className="peer rounded h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-400"
                    placeholder="Password"
                  />
                </div>
                <p>
                  If you havent an account. Please{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
                    Sign Up
                  </Link>{" "}
                  Here{" "}
                </p>
                <div class="relative">
                  <button
                  type="submit"
                    className="bg-blue-500 text-white rounded-md px-6 py-2"
                    disabled={isLoading}
                  
                  >
                    {isLoading && (
                      <Spinner color="info" aria-label="Info spinner example" />
                    )}
                    Login
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button className="block">
                {" "}
                <img
                  src={GoogleLogo}
                  alt=""
                  className="w-12 h-12 inline-block"
                />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
