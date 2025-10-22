import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm py-10 shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-5">
          Login your account
        </p>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-black mt-2">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-semibold text-black mt-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

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
        </form>
      </div>
    </div>
  );
};

export default Login;
