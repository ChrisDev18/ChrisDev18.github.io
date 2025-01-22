import {ButtonHTMLAttributes} from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({children, ...props}: IconButtonProps) {
  return (
      <button {...props} className="
            w-8 h-8 flex items-center justify-center rounded-full
            border border-white border-opacity-25 text-white bg-white bg-opacity-0
            hover:bg-opacity-5 hover:border-opacity-75
            transition-all duration-75">
        { children }
      </button>
  );
}