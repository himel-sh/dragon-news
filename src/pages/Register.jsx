import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm py-10 shrink-0 shadow-2xl">
        <p className="text-2xl font-semibold text-center mt-5">
          Register your account
        </p>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-semibold text-black mt-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              required
            />
            {nameError && <p className="text-error text-xs">{nameError}</p>}
            <label className="label font-semibold text-black mt-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="Enter photo url"
            />
            <label className="label font-semibold text-black mt-2">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-semibold text-black mt-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
