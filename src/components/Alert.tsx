import React from "react";

type Props = {
  message: string;
  show: boolean;
  type: "success" | "error";
}
const Alert: React.FC<Props> = ({message, type, show}) => {
  console.log(`show alert: ${show}`)
  return (
      <div
          className={` ${
              type === "success" ? "bg-emerald-700" : "bg-red-300"
          } text-slate-300 p-2 rounded-md absolute top-0 m-4  right-0 transition-all duration-1000 ease-in-out ${!show && "opacity-0"}  `}
      >
        {message}
      </div>
  );
};

export default Alert;