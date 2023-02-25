import React from "react";
import { useForm } from "react-hook-form";

type FormType = {
  company: string;
  logo: FileList;
  owner: string;
  ceo: string;
  cto: string;
  address: string;
  domain: string;
  description: string;
  date: Date;
  networth: number;
  product: string;
  linkedin: string;
  website: string;
  youtube: string;
  certificate: FileList;
  license: FileList;
  profit: number;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const onSubmit = (data: FormType) => {};

  return (
    <>
      <div className="mx-auto w-2/5 my-5 bg-gray-900 px-8 py-5 rounded-lg mt-28">
        <h1 className="text-3xl mb-8 font-semibold">Company Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-xl mb-2 w-full ">Company Name</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter company name"
            {...register("company")}
          ></input>
          <p className="text-xl mb-2 ">Logo</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-600 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            {...register("logo")}
          ></input>
          <p className="text-xl mb-2 w-full ">Owner of Company</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter Name"
            {...register("owner")}
          ></input>
          <p className="text-xl mb-2 w-full ">CEO of Company</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter Name"
            {...register("ceo")}
          ></input>
          <p className="text-xl mb-2 w-full ">CTO of Company</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter Name"
            {...register("cto")}
          ></input>
          <p className="text-xl mb-2 ">Address</p>
          <textarea
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            cols={30}
            rows={5}
            placeholder="Enter address of company"
            {...register("address")}
          ></textarea>
          <p className="text-xl mb-2 w-full ">Domain</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter your domain"
            {...register("domain")}
          ></input>
          <p className="text-xl mb-2">Description</p>
          <textarea
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            cols={30}
            rows={5}
            placeholder="Give some information about your company..."
            {...register("description")}
          ></textarea>
          <p className="text-xl mb-2 ">Start Date</p>
          <input
            type="date"
            required
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            {...register("date")}
          />
          <p className="text-xl mb-2 ">Networth</p>
          <input
            required
            type="number"
            placeholder="Enter Price"
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            {...register("networth")}
          ></input>
          <p className="text-xl mb-2">Type of Product</p>
          <textarea
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            cols={30}
            rows={5}
            placeholder="Enter type of products"
            {...register("product")}
          ></textarea>
          <p className="text-xl mb-2 w-full ">LinkedIn Page</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter page link"
            {...register("linkedin")}
          ></input>
          <p className="text-xl mb-2 w-full ">Website Link</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter website link of your company"
            {...register("website")}
          ></input>
          <p className="text-xl mb-2 w-full ">Youtube Link</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Enter youtube page link of your company"
            {...register("youtube")}
          ></input>
          <p className="text-xl mb-2 ">Permit & Certificate</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-600 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            {...register("certificate")}
          ></input>
          <p className="text-xl mb-2 ">Business License</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-600 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="file"
            accept="image/png, image/jpg, image/jpeg, .pdf"
            {...register("license")}
          ></input>
          <p className="text-xl mb-2 ">Current Year Profit</p>
          <input
            required
            type="number"
            placeholder="Enter Price"
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            {...register("profit")}
          ></input>
          <button
              type="button"
              className="text-white w-44 ml-40 mt-5 mb-11 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
        </form>
      </div>
    </>
  );
};

export default Register;
