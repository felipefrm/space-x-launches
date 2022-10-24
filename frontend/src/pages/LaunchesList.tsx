import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

import api from "../services/api";
import { Launch } from "../types/Launch";

import { ListItem } from "../components/ListItem";

interface LaunchesListProps {
  type: "upcoming" | "past";
}

export function LaunchesList({ type }: LaunchesListProps) {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoadingLaunches, setIsLoadingLaunches] = useState(true);

  useEffect(() => {
    loadLaunches();

    async function loadLaunches() {
      setIsLoadingLaunches(true);
      const { data } = await api.get(`/launches/${type}`);
      setLaunches(data.map((launch: Launch) => launch).reverse());
      setIsLoadingLaunches(false)
    }
  }, [])

  return (
    <main className="bg-hero-pattern h-screen bg-bottom bg-cover flex">
      <div className="w-full backdrop-blur-md overflow-y-scroll">
        <div className="container my-10 flex flex-col gap-2 m-auto w-[900px]">
          <h1 className="text-4xl font-bold text-white flex gap-2 items-end">
            All {type} launches{' '}
            {
              isLoadingLaunches ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <span className="italic text-2xl">(total of {launches.length})</span>
              )
            }
          </h1>
          {launches.map((launch: Launch) => (
            <ListItem key={launch.id} type={type} data={launch} />
          ))}
        </div>
      </div>
    </main>
  )
}