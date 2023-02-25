import { GetCompaniesPayload, get_companies } from "@/api/get-companies";
import { useEffect, useState } from "react";
import Model from "./components/Model";

const Showcase = () => {
  const [companies, setCompanies] = useState<GetCompaniesPayload[]>([]);
  const [current_company_index, setccI] = useState(0);
  const [c, setc] = useState(false);
  useEffect(() => {
    get_companies("price").then((e) => {
      setCompanies(e.data.payload);
    });
  }, []);
  return (
    <div className="pt-32  ">
      {c && (
        <Model
          onClose={() => setc(false)}
          company={companies[current_company_index]}
        ></Model>
      )}
      {companies.map((e, i) => {
        return (
          <div
            key={e.emailId}
            className="text-white bg-gray-900 p-10 inline-flex flex-col rounded-lg m-3"
            onClick={() => {
              setccI(i);
              setc(true);
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
    </div>
  );
};
export default Showcase;
