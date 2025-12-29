import {LucideIcon} from "lucide-react";
import {raleway} from "@/app/fonts";
import Hyperlink from "@/app/components/Hyperlink";

type CourseCardProps = {
  title: string,
  description: string,
  Icon: LucideIcon,
  year?: string
  language?: string
}

export default function CourseCard({title, description, Icon, year, language}: CourseCardProps) {
  return (
      <div className="text-white group relative border hover:border-white/50 hover:shadow-[0px_2px_32px_0px_#8F5FFF80] border-white/20 p-6 pt-8 w-84 h-96 flex flex-col items-center gap-4 bg-black hover:bg-[#0C0814] transition-colors duration-75">
        {year && language &&
          <div className="absolute top-0 left-0 flex flex-col items-start">
            { year &&
              <p className={`border-white/20 group-hover:border-white/50 border-b border-r py-2 px-3 lining-nums ${raleway.className}`}>{year}</p>
            }
            { language &&
              <p className={`border-white/20 group-hover:border-white/50 border-b border-r py-2 px-3 ${raleway.className}`}>{language}</p>
            }
          </div>
        }

        <div className="flex flex-col items-center gap-4">
          <Icon className="relative rotate-4" size={64} strokeWidth={1} />
          <svg width="146" height="22" viewBox="0 0 146 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M73 21.8809C113.317 21.8809 146 17.4037 146 11.8809L146 9.88086C144.413 4.55029 112.303 1.88086 73.0002 1.88086C33.9073 1.88086 1.90177 4.5903 0 9.88086V11.8809C0 17.4037 32.6832 21.8809 73 21.8809Z" fill="white"/>
            <ellipse cx="73" cy="10" rx="73" ry="10" fill="url(#paint0_radial_73_57)"/>
            <path d="M73 0.5C93.1429 0.5 111.369 1.61814 124.551 3.42383C131.145 4.32719 136.457 5.4001 140.109 6.58301C141.939 7.17553 143.322 7.78709 144.238 8.40039C145.177 9.0289 145.5 9.57219 145.5 10C145.5 10.4278 145.177 10.9711 144.238 11.5996C143.322 12.2129 141.939 12.8245 140.109 13.417C136.457 14.5999 131.145 15.6728 124.551 16.5762C111.369 18.3819 93.1429 19.5 73 19.5C52.8571 19.5 34.6309 18.3819 21.4492 16.5762C14.8547 15.6728 9.54303 14.5999 5.89062 13.417C4.06115 12.8245 2.67793 12.2129 1.76172 11.5996C0.82286 10.9711 0.5 10.4278 0.5 10C0.5 9.57219 0.82286 9.0289 1.76172 8.40039C2.67793 7.78709 4.06115 7.17553 5.89062 6.58301C9.54303 5.4001 14.8547 4.32719 21.4492 3.42383C34.6309 1.61814 52.8571 0.5 73 0.5Z" stroke="white" strokeOpacity="0.75"/>
            <defs>
              <radialGradient id="paint0_radial_73_57" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(73.5 15.8809) rotate(-90) scale(12.5 70.7723)">
                <stop stopColor="#EDE9FF"/>
                <stop offset="1" stopColor="#8D82B2"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <span className="flex h-[64px] items-center">
          <h3 className={`text-2xl font-semibold text-center ${raleway.className}`}>{title}</h3>
        </span>
        <p className={`font-medium text-center ${raleway.className}`}>{description}</p>

        <Hyperlink href={"#"} internal chevron={false} className={`font-bold text-center ${raleway.className}`}>View <br/> coursework</Hyperlink>

        <svg className="absolute bottom-0 right-0" width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.75" x="60" y="60" width="20" height="20" fill="#7E41D8"/>
          <rect opacity="0.75" x="80" y="40" width="20" height="20" fill="white"/>
          <rect x="60" y="20" width="20" height="20" fill="white"/>
          <rect opacity="0.75" y="40" width="20" height="20" fill="white"/>
          <rect x="80" width="20" height="20" fill="#7E41D8"/>
          <rect opacity="0.5" x="40" y="20" width="20" height="20" fill="white"/>
          <rect x="20" width="20" height="20" fill="white"/>
          <rect opacity="0.75" x="40" y="40" width="20" height="20" fill="#AC95FF"/>
        </svg>
      </div>
  )
}