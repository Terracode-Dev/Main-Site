import Meteors from "../ui/meteors";
import Particles from '../ui/particles';

export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={4} />
      
    </div>
  );
}
