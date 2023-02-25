import { GetCompanyPayload, get_my_company } from "@/api/get-company";
import { UpdateCompanyBody, update_company } from "@/api/update-company";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, setValue } = useForm<UpdateCompanyBody>();
  const onSubmit = (data: UpdateCompanyBody) => {
    console.log(data.networth);

    update_company({ ...data, networth: +data.networth, price: +data.price });
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
      set_my_company(e.data.payload);
    });
  }, []);
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
            {...register("name")}
          ></input>
          <p className="text-xl mb-2 ">Logo</p>
          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Copy & paste the link here..."
            {...register("profileUrl")}
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
            {...register("linkedIn")}
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
          <p className="text-xl mb-2 ">Business License</p>

          <input
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            required
            type="text"
            placeholder="Copy & paste the link here..."
            {...register("businessLicenseLink")}
          ></input>

          <p className="text-xl mb-2 ">Current Year Profit</p>
          <input
            required
            type="number"
            placeholder="Enter Price"
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            {...register("price")}
          ></input>
          <button
            type="submit"
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
