import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm py-10 shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-5">
          Login your account
        </p>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-black mt-2">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label font-semibold text-black mt-2">
              Password
            </label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-center pt-4 font-semibold text-accent">
              Don't have an account?{" "}
              <Link
                className="text-secondary hover:underline text-sm "
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
