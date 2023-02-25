import { GetCompaniesPayload } from "@/api/get-companies";
import Image from "next/image";
import { isPropertySignature } from "typescript";

type Props = {
  company: GetCompaniesPayload;
  onClose: () => void;
};
const Model = (prop: Props) => {
  const p = prop.company;

  return (
    <>
      <div className="fixed h-screen w-screen bg-black/50"></div>

      <div className="h-full w-full fixed overflow-scroll pb-36">
        <div className="mx-auto w-2/5 my-5 bg-gray-900 px-8 py-5 rounded-lg mt-28">
          <Image
            className="mx-auto rounded-xl my-20"
            src={p.profileUrl}
            alt="image"
          ></Image>
          <h1 className="text-3xl mb-8 font-semibold">Company Details</h1>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <p className="text-xl mb-2 w-full ">Company Name</p>
          <p
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            placeholder="Enter company name"
          >
            {p.name}
          </p>
          <p className="text-xl mb-2 w-full ">Owner of Company</p>
          <p
            className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
            placeholder="Enter Name"
          >
            {p.name}
          </p>
          <p className="text-xl mb-2 w-full ">CEO of Company</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.ceo}
          </p>
          <p className="text-xl mb-2 w-full ">CTO of Company</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.cto}
          </p>
          <p className="text-xl mb-2 ">Address</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.address}
          </p>
          <p className="text-xl mb-2 w-full ">Domain</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.domain}
          </p>
          <p className="text-xl mb-2">Description</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.description}
          </p>

          <p className="text-xl mb-2 ">Networth</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.networth}
          </p>
          <p className="text-xl mb-2">Type of Product</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.product}
          </p>
          <p className="text-xl mb-2 w-full ">LinkedIn Page</p>
          {p.linkedIn}

          <p className="text-xl mb-2 w-full ">Website Link</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.website}
          </p>
          <p className="text-xl mb-2 w-full ">Youtube Link</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.youtube}
          </p>

          <p className="text-xl mb-2 ">Business License</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.businessLicenseLink}
          </p>
          <p className="text-xl mb-2 ">Current Year Profit</p>
          <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
            {p.currentYearProfit}
          </p>
          <button
            type="button"
            onClick={prop.onClose}
            className="text-white w-44 ml-40 mt-5 mb-11 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
export default Model;
