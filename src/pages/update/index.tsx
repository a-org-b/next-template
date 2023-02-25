import { GetCompanyPayload, get_my_company } from "@/api/get-company";
import { UpdateCompanyBody, update_company } from "@/api/update-company";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Update = () => {
  const { register, handleSubmit, setValue } = useForm<UpdateCompanyBody>();
  const onSubmit = (data: UpdateCompanyBody) => {
    update_company({
      ...data,
      networth: +data.networth,
      price: +data.price,
      currentYearProfit: +data.currentYearProfit,
    });
  };
  const [my_company, set_my_company] = useState<GetCompanyPayload>();
  useEffect(() => {
    get_my_company().then((e) => {
      setValue("name", e.data.payload.name);
      setValue("domain", e.data.payload.domain);
      setValue("profileUrl", e.data.payload.profileUrl);
      setValue("currentYearProfit", e.data.payload.currentYearProfit);
      setValue("address", e.data.payload.address);
      setValue("ceo", e.data.payload.ceo);
      setValue("businessLicenseLink", e.data.payload.businessLicenseLink);
      setValue("description", e.data.payload.description);
      setValue("networth", e.data.payload.networth);
      setValue("youtube", e.data.payload.youtube);
      setValue("openToAquire", e.data.payload.openToAquire);
      setValue("cto", e.data.payload.cto);
      setValue("owner", e.data.payload.owner);
      setValue("linkedIn", e.data.payload.linkedIn);
      setValue("product", e.data.payload.product);
      setValue("website", e.data.payload.website);
      setValue("activeUsers", e.data.payload.activeUsers);

      set_my_company(e.data.payload);
    });
  }, []);
  return (
    <>
      <div className="w-9/12 mx-auto bg-gray-900 px-20 py-5 rounded-lg mt-28 mb-20 flex flex-row flex-wrap justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
          <h1 className="text-3xl text-center mb-8 mt-5 font-semibold border-b-2 border-white pb-7">
            Company Details
          </h1>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full">Company Name</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter company name"
              {...register("name")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Logo</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Copy & paste the link here..."
              {...register("profileUrl")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">Owner of Company</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter Name"
              {...register("owner")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">CEO of Company</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter Name"
              {...register("ceo")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">CTO of Company</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter Name"
              {...register("cto")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">Domain</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter your domain"
              {...register("domain")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Address</p>
            <textarea
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              cols={30}
              rows={5}
              placeholder="Enter address of company"
              {...register("address")}
            ></textarea>
          </div>

          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2">Description</p>
            <textarea
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              cols={30}
              rows={5}
              placeholder="Give some information about your company..."
              {...register("description")}
            ></textarea>
          </div>

          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Networth</p>
            <input
              required
              type="number"
              placeholder="Enter Price"
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              {...register("networth")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2">Type of Product</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter type of product"
              {...register("product")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">LinkedIn Page</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter page link"
              {...register("linkedIn")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">Website Link</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter website link of your company"
              {...register("website")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 w-full ">Youtube Link</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Enter youtube page link of your company"
              {...register("youtube")}
            ></input>
          </div>

          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Business License</p>
            <input
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              required
              type="text"
              placeholder="Copy & paste the link here..."
              {...register("businessLicenseLink")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Current Year Profit</p>
            <input
              required
              type="number"
              placeholder="Enter Price"
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              {...register("currentYearProfit")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Active Users</p>
            <input
              required
              type="number"
              placeholder="Enter Price"
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              {...register("activeUsers")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <span className="text-xl mb-2 ">Open for Acquire</span>
            <input
              required
              type="checkbox"
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              {...register("openToAquire")}
            ></input>
          </div>
          <div className="w-96 inline-block mx-10">
            <p className="text-xl mb-2 ">Aquire Price</p>
            <input
              required
              type="number"
              placeholder="Enter Price"
              className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-96 outline-none focus:outline-1"
              {...register("price")}
            ></input>
          </div>
          <button
            type="submit"
            className="text-white w-96 block mx-auto mt-5 mb-11 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
