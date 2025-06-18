import React from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const BackButton = () => {
  const navigate = useNavigate();
  return(
    <>
<button
  className="bg-[#111827] text-center w-24 rounded-xl h-7 relative text-white text-sm font-semibold group"
  type="button"
  onClick={() => {navigate("/")}}
>
  <div
    className="bg-[#01baef] rounded-xl h-6 w-1/4 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[95px] z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="20px"
      width="20px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
      
    </svg>
  </div>
  <p className="translate-x-2">
            back
    </p>
</button>
</>
  )
};

export default BackButton;
