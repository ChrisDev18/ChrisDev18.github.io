import Hero from "@/app/components/Hero";
import greenguide_hero from "/public/greenguide.png";

export default function GreenGuidePage() {
  return (
      <div className={"flex flex-col flex-grow bg-neutral-100 text-white"}>
        <header>
          <Hero title={"GreenGuide"} img={greenguide_hero}/>
        </header>

        <div>

        </div>
      </div>
  );
}