import { useEffect, useState } from "react";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

import api from "../services/api";
import { Launch } from "../types/Launch";

import { ListItem } from "../components/ListItem";
import { Link } from "react-router-dom";
import { useTestAB } from "../contexts/testAB";

interface LaunchesListProps {
  type: "upcoming" | "past";
}

export function LaunchesList({ type }: LaunchesListProps) {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [isLoadingLaunches, setIsLoadingLaunches] = useState(true);

  // TODO: get A/B test variant from context and use to display custom background
  const { variant } = useTestAB();

  useEffect(() => {
    loadLaunches();

    async function loadLaunches() {
      setIsLoadingLaunches(true);

      try {
        const { data } = await api.get(`/launches/${type}`);
        setLaunches(data.map((launch: Launch) => launch).reverse());
      } catch (error) {
        toast(`Something went wrong while loading ${type} launches`, { type: 'error', position: 'top-center' });
      }

      setIsLoadingLaunches(false)
    }
  }, [])

  return (
    <main className="bg-sunset h-screen bg-bottom bg-cover flex">
      <div className="w-full backdrop-blur-md overflow-y-scroll">
        <div className="container my-10 flex flex-col gap-2 m-auto max-w-[900px]">
          <h1 className="text-4xl font-bold text-white flex gap-2 items-end">
            <Link to="/">
              <FaArrowLeft className="mr-4 hover:opacity-30 transition-opacity" />
            </Link>
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