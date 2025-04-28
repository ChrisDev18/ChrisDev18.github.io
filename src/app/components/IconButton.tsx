import {ButtonHTMLAttributes} from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({children, ...props}: IconButtonProps) {
  return (
      <button {...props} className="
            w-8 h-8 flex items-center justify-center rounded-full
            border border-white/50 text-white bg-white/0
            hover:bg-white/20 hover:border-white/100
            transition-[background-color,border-color] duration-75">
        { children }
      </button>
  );
}