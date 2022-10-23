import { useEffect, useState } from "react";
import { CardButton } from "../components/Card/CardButton";
import { CardMission } from "../components/Card/CardMission";
import api from "../services/api";

import { Launch } from '../types/Launch'

export function Home() {

  const [nextLaunch, setNextLaunch] = useState<Launch>({} as Launch);
  const [latestLaunch, setLatestLaunch] = useState<Launch>({} as Launch);

  const [isLoadingNextLaunch, setIsLoadingNextLaunch] = useState(true);
  const [isLoadingLatestLaunch, setIsLoadingLatestLaunch] = useState(true);

  console.log(isLoadingNextLaunch)

  useEffect(() => {
    loadNextLaunch();
    loadLatestLaunch();

    async function loadNextLaunch() {
      setIsLoadingNextLaunch(true);
      const { data } = await api.get("/launches/next");
      setNextLaunch(data);
      setIsLoadingNextLaunch(false)
    }

    async function loadLatestLaunch() {
      setIsLoadingLatestLaunch(true);
      const { data } = await api.get("/launches/latest");
      setLatestLaunch(data);
      setIsLoadingLatestLaunch(false);
    }
  }, [])

  return (
    <main className="bg-hero-pattern min-h-screen bg-bottom bg-cover flex">
      <div className="w-full backdrop-blur-md">
        <div className="flex h-full">
          <div className="flex flex-1 justify-center items-center flex-wrap gap-2">
            <div className="flex flex-col gap-2 w-[500px]">
              <CardMission data={nextLaunch} isLoading={isLoadingNextLaunch} title="Next launch" />
              <CardButton title="See all past missions" />
            </div>
            <div className="flex flex-col gap-2 w-[500px]">
              <CardMission data={latestLaunch} isLoading={isLoadingLatestLaunch} title="Latest launch" />
              <CardButton title="See all upcoming missions" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}