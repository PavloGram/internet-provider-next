"use client";
import { useEffect, useState } from "react";
import Reviews from "./components/Reviews";
import Banner from "./components/Banner";
import Vacans from "./components/Vacans";
import TechService from "./ui/TechService";

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState(1);

  return (
    <main>
      <Banner />
      <Reviews />
      <Vacans />
      <TechService />
    </main>
  );
}
