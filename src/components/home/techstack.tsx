import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const reviews = [
  { username: "javascript", img: <FaJs /> ,color:"hover:text-yellow-400" },
  { username: "react", img: <FaReact />,color:"hover:text-blue-700"  },
  { username: "nextjs", img: <RiNextjsFill /> ,color:"hover:text-slate-950" },
  { username: "golang", img: <FaGolang /> ,color:"hover:text-blue-700" },
  { username: "Rust", img: <FaRust /> ,color:"hover:text-orange-500" },
  { sername: "Flutter",img: <SiFlutter />,color:"hover:text-blue-500"  },
  { sername: "typescript",img: <SiTypescript />,color:"hover:text-blue-500"  },
  { sername: "laravel",img: <FaLaravel />,color:"hover:text-red-500"  },
  { sername: "php",img: <SiPhp />,color:"hover:text-blue-500"  },
  { sername: "python",img:<FaPython />,color:"hover:text-blue-400"  },
];
 
const firstRow = reviews.slice(0, reviews.length);
 
const ReviewCard = ({ img }: { img: JSX.Element | string }) => {
  return (
    <figure
      className={cn(
        "flex relative items-center justify-center md:w-40 lg:w-64 cursor-pointer overflow-hidden rounded-xl h-[100px]",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2 h-[80px] w-[80px]">
      {typeof img === "string" ? (
          <img className="h-[80px] w-[80px]" alt="" src={img} />
        ) : (
          <div className="text-6xl">{img}</div> // Render icon if `img` is JSX
        )}
      </div>
    </figure>
  );
};
 
export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s] text-gray-600">
        {firstRow.map((review) => (
          <div className={review.color}>
            <ReviewCard key={review.username} {...review} /></div>
          
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none "></div>
      
    </div>
  );
}