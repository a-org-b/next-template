import { LOCAL_TOKEN_KEY } from "@/api/axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const local_token = localStorage.getItem(LOCAL_TOKEN_KEY);
    if (local_token) setLoginStatus(true);
  }, []);
  return (
    <nav className="bg-white backdrop-blur-2xl border-b-2 border-gray-500 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed top-0 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/showcase">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Acquire
            </span>
          </div>
        </Link>
        <div className="flex md:order-2">
          {loginStatus ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                localStorage.removeItem(LOCAL_TOKEN_KEY);
                setLoginStatus(false);
                router.push("/login");
              }}
            >
              Log Out
            </button>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <p>Login</p>
              </button>
            </Link>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <p>Acquire-C</p>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/update"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Update
              </a>
            </li>
            <li>
              <a
                href="/showcase"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
              >
                Company Showcase
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
