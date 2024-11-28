import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  { username: "javascript", img: "/js.png", color: "hover:text-yellow-400" },
  { username: "react", img: "/React.png", color: "hover:text-blue-700" },
  { username: "nextjs", img: "/Node.png", color: "hover:text-slate-950" },
  { username: "golang", img: "/Go.png", color: "hover:text-blue-700" },
  { username: "rust", img: "/Rust.png", color: "hover:text-orange-500" },
  { username: "flutter", img: "/Flutter.png", color: "hover:text-blue-500" },
  { username: "typescript", img: "/Ts.png", color: "hover:text-blue-500" },
  { username: "laravel", img: "/Laravel.png", color: "hover:text-red-500" },
  { username: "php", img: "/Php.png", color: "hover:text-blue-500" },
  { username: "python", img: "/Python.png", color: "hover:text-blue-400" },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ img }: { img: JSX.Element | string }) => {
  return (
    <figure
      className={cn(
        "flex relative items-center justify-center md:w-40 lg:w-64 cursor-pointer overflow-hidden rounded-xl",
        "h-[100px] md:h-[120px] lg:h-[140px]", // Responsive heights
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2 h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]">
        {typeof img === "string" ? (
          <img
            className="h-full w-full object-contain" // Ensures the image scales proportionally
            alt=""
            src={img}
          />
        ) : (
          <div className="text-5xl md:text-6xl">{img}</div> // Render icon if `img` is JSX
        )}
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:50s] text-gray-600">
        {firstRow.map((review) => (
          <div className={review.color} key={review.username}>
            <ReviewCard {...review} />
          </div>
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"></div>
    </div>
  );
}
