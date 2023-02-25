import { GetCompaniesPayload } from "@/api/get-companies";
import { isPropertySignature } from "typescript";

type Props = {
  company: GetCompaniesPayload;
  onClose: () => void;
};
const Model = (prop: Props) => {
  const p = prop.company;
  return (
    <div className="h-full w-full ">
      <div className="mx-auto w-2/5 my-5 bg-gray-900 px-8 py-5 rounded-lg mt-28">
        <img
          className="mx-auto rounded-xl my-20"
          src="data:image/png;base64,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"
        ></img>
        <h1 className="text-3xl mb-8 font-semibold">Company Details</h1>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <p className="text-xl mb-2 w-full ">Company Name</p>
        <p
          className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
          placeholder="Enter company name"
        >
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 w-full ">Owner of Company</p>
        <p
          className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1"
          placeholder="Enter Name"
        >
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 w-full ">CEO of Company</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          ceo
        </p>
        <p className="text-xl mb-2 w-full ">CTO of Company</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 ">Address</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 w-full ">Domain</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {p.domain}
        </p>
        <p className="text-xl mb-2">Description</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 ">Start Date</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 ">Networth</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2">Type of Product</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 w-full ">LinkedIn Page</p>
        {/* {p.} */}

        <p className="text-xl mb-2 w-full ">Website Link</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 w-full ">Youtube Link</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 ">Permit & Certificate</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
        </p>
        <p className="text-xl mb-2 ">Business License</p>
        <p className="bg-slate-700 placeholder:text-zinc-400 shadow-lg rounded-md px-5 py-2 text-lg mb-10 w-full outline-none focus:outline-1">
          {/* {p.} */}
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
    // </div>
  );
};
export default Model;
