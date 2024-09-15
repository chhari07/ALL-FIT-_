import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {


  return (
    <div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
        <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto text-white">
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="text-white">ALL FIT</h1>
            </div>

            <form onSubmit={onSubmit} className="mt-5">
              <label
                htmlFor="login"
                className="font-semibold text-sm text-gray-400 pb-1 block"
              >
                E-mail
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="login"
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                value={email}
              />
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-400 pb-1 block"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
                value={password}
              />
              {errorMessage && (
                <span className="text-rose-700 font-semibold">
                  {errorMessage}
                </span>
              )}
              <div className="text-right mb-4">
                <a
                  href="#"
                  className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  disabled={isSigningIn}
                >
                  {isSigningIn ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
              <NavLink
                to="/CreateNewAccount"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign up / Create Account
              </NavLink>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
