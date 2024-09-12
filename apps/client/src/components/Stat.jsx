import React from "react";
const Stat = ({ name, cifra, icon }) => {
  return (
    <div className="flex flex-1 bg-[#05796b] p-1">
      <img src={icon} alt={name} className="w-5 h-5" />
      <p className="text-white text-sm font-pregular ml-2">{name} : {cifra}</p>
    </div>
  );
};
export default Stat;
