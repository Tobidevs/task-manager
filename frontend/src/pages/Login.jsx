import React from "react";


const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center gap-10 items-center">
      <p className="text-4xl font-bold ">Task Manager</p>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse w-6/10 gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Use Task Manager to create, update, and manage tasks with different statuses.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
