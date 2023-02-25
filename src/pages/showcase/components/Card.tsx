import Image from "next/image";

const Card = () => {
  return (
    <div className="text-white bg-gray-900  p-10 w-fit rounded-lg m-3">
      <img src="" alt="here is img"></img>
      <p className="cursor-pointer">NAME: {"All-safe"}</p>
      <p>Domain: {"Cyber-security"}</p>
      <p>Product: {"software"}</p>
      <p>Current year proffit:{"100"}</p>
      <button>See More</button>
    </div>
  );
};
export default Card;
