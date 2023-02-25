import Link from "next/link";
import React, { useState } from "react";

// import { createClient } from "@supabase/supabase-js";
function Login() {
  const [lid, setlid] = useState("");
  const [lpass, setlpass] = useState("");
  const [tof, settof] = useState(true);

  const [bool, setbool] = useState(true);
  const [a, seta] = useState(` url(/image/dark.jpg) `);
  const [b, setb] = useState(" text-white ");
  const [c, setc] = useState(" text-gray-300 ");
  const [d, setd] = useState(" bg-yellow-500 ");
  const [e, sete] = useState(" text-yellow-400 ");

  return (
    <div
      className={"w-screen h-screen bg-no-repeat bg-cover "}
      style={{ backgroundImage: a }}
    >
      <div className="flex h-screen justify-center items-center">
        <div className="text-center ">
          <h1
            className={" font-font-mast text-5xl " + b + " font-semibold mb-8"}
          >
            Sign in
          </h1>
          <p className={b + " mb-3 text-xl w-80 "}>Sign in and get started</p>
          <div className="w-80">
            <input
              type="text"
              placeholder="Login"
              className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={lid}
              name="id"
              onChange={(e) => setlid(e.target.value)}
            ></input>
            <br />
            <input
              type="Password"
              placeholder="Password"
              className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={lpass}
              name="pass"
              onChange={(e) => setlpass(e.target.value)}
            ></input>
            <div className="flex w-full relative">
              <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                className="mr-2 text-white"
              />
              <p className={c}>Remember me</p>
              <p className={e + " absolute right-0"}>Forgot Password</p>
            </div>

            <Link href={tof ? "/signin" : "/register"}>
              <button
                className={
                  " text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center" +
                  d
                }
                // onClick={() => post(lid, lpass)}
              >
                Login
              </button>
            </Link>
            {/* <div className="flex justify-center mt-5 ">
              <img
                src="/image/google.png"
                alt="google"
                className="w-10 rounded-full mx-2"
              ></img>
              <img
                src="/image/facebook.png"
                alt="fb"
                className="w-10 rounded-full  mx-2"
              ></img>
            </div> */}

            <div className="flex mb-12 mt-3 ">
              <p className={b}>Don't have an account?</p>
              <Link
                href="/signup"
                className="ml-3 blur-1  text-yellow-500 font-bold"
              >
                {" "}
                Sign up{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
