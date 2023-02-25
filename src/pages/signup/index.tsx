import Link from "next/link";
import React, { useState } from "react";
// import { createClient } from '@supabase/supabase-js'

function Signup() {
  const [bool, setbool] = useState(true);
  const [a, seta] = useState(`url(/image/dark.jpg)`);
  const [b, setb] = useState(" text-white ");
  const [c, setc] = useState(" text-gray-300 ");
  const [d, setd] = useState(" bg-yellow-500 ");
  const t = "false";

  const [id, setid] = useState("");
  const [userid, setUserId] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");

  return (
    <div
      className={" w-screen h-screen bg-no-repeat bg-cover"}
      style={{ backgroundImage: a }}
    >
      <div className="flex h-screen justify-center items-center ">
        <div className="p-5 rounded-3xl text-center ">
          <h1
            className={" font-font-mast text-5xl " + b + " font-semibold mb-8"}
          >
            Sign up
          </h1>
          <p className={b + " mb-3 text-xl w-80 "}>
            Sign up with email and password
          </p>
          <div className="w-80 text-center">
            <input
              type="text"
              placeholder="Email id"
              className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={id}
              name="id"
              onChange={(e) => setid(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Create User Id"
              className="w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={userid}
              name="userId"
              onChange={(e) => setUserId(e.target.value)}
            ></input>
            {/* value={li} name="li" onChange={catchInput} */}
            <br />
            <input
              type="Password"
              placeholder="Create Password"
              className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={pass}
              name="pass"
              onChange={(e) => setpass(e.target.value)}
            ></input>
            <br />
            <input
              type="Password"
              placeholder="Confirm Password"
              className="mx-auto w-full rounded-lg h-10 text-xl pl-6 mb-4 text-white bg-sky-900"
              value={cpass}
              name="cpass"
              onChange={(e) => setcpass(e.target.value)}
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
            </div>

            <Link href={b ? "/signin" : "/signup"}>
              <button
                className={
                  " text-blue-900 font-semibold w-full mt-4 rounded-lg h-10 text-xl text-center" +
                  d
                }
              >
                Create account
              </button>
            </Link>
            <p className={b + " mt-3 mb-3 text-xl"}>
              Sign up with social media
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
