import { Card } from "../components/Card/Card";
import { CardButton } from "../components/Card/CardButton";
import { CardMission } from "../components/Card/CardMission";

export function Home() {
  return (
    <main className="bg-hero-pattern min-h-screen bg-bottom bg-cover flex">
      <div className="w-full backdrop-blur-md">
        <div className="flex h-full">
          <div className="flex flex-1 justify-center items-center flex-wrap gap-2">
            <div className="flex flex-col gap-2 w-[410px]">
              <CardMission title="Next launch" />
              <CardButton title="See all past missions" />
            </div>
            <div className="flex flex-col gap-2 w-[410px]">
              <CardMission title="Latest launch" />
              <CardButton title="See all upcoming missions" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}