import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm py-10 shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-5">
          Register your account
        </p>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-black mt-2">
              Your Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            <label className="label font-semibold text-black mt-2">
              Photo URL
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter photo url"
            />
            <label className="label font-semibold text-black mt-2">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label font-semibold text-black mt-2">
              Password
            </label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5 text-accent">
              Already have an account?{" "}
              <Link
                className="text-secondary hover:underline text-sm "
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
