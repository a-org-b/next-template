import {
  GetCompaniesPayload,
  GetCompaniesRes,
  get_companies,
} from "@/api/get-companies";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Model from "./components/Model";

// const [query, setQuery] = useState("");
const Showcase = () => {
  const [companies, setCompanies] = useState<GetCompaniesPayload[]>([]);
  const [current_company_index, setccI] = useState(0);
  useEffect(() => {
    get_companies("price").then((e) => setCompanies(e.data.payload));
  }, []);
  return (
    <>
      <Model company={companies[current_company_index]}></Model>
      {companies.map((e, i) => {
        return (
          <div
            key={e.emailId}
            className="text-white bg-gray-900  p-10 w-fit rounded-lg m-3"
            onClick={() => {
              setccI(i);
            }}
          >
            <img src={e.profileUrl} alt="here is img"></img>
            <p className="cursor-pointer">NAME: {e.name}</p>
            <p>Domain: {e.domain}</p>
            <p>Product: {e.product}</p>
            <p>Current year proffit:{e.currentYearProfit}</p>
            <button></button>
          </div>
        );
      })}
    </>
  );
};
export default Showcase;
