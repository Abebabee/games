"use client";

import { useEffect, useState } from "react";
import LeftCard from "../components/higherlower/LeftCard";
import RightCard from "../components/higherlower/RightCard";
import Modal from "../components/modal";
import { useRouter } from "next/navigation";

const HigherLower = () => {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [countryNames, setCountryNames] = useState<string[]>([]);
  const [rightCountry, setRightCountry] = useState<any>();
  const [rightPopulation, setRightPopulation] = useState<any>();
  const [rightUrl, setRightUrl] = useState<any>();
  const [leftCountry, setLeftCountry] = useState<any>();
  const [leftPopulation, setLeftPopulation] = useState<any>();
  const [leftUrl, setLeftUrl] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameoverMsg, setGameoverMsg] = useState("");
  const [result, setResult] = useState("");
  const [bg, setBg] = useState("");

  const isCorrectGuess = (guess: boolean) => {
    if (rightPopulation > leftPopulation && guess) {
      setScore(score + 1);
    } else if (rightPopulation < leftPopulation && !guess) {
      setScore(score + 1);
    } else {
      if (score > 0) {
        setResult("Score: " + score);
        setGameoverMsg("Try again!");
        setBg("bg-card")
        setIsModalOpen(true);
      }
      setScore(0);
    }
    changeCards();
  };
  const changeCards = () => {
    setLeftCountry(rightCountry);
    setLeftUrl(rightUrl);
    setLeftPopulation(rightPopulation);
    generateCountry();
  };
  const generateCountry = () => {
    if (countryNames.length > 0) {
      const randomIndex1 = Math.floor(Math.random() * countryNames.length);
      const countryName1 = countryNames[randomIndex1];
      fetch(
        `https://restcountries.com/v3.1/name/${countryName1}?fields=population,name,flags`
      )
        .then((res) => res.json())
        .then((data) => {
          const countryData = data[0];
          setRightCountry(countryData.name.common);
          setRightPopulation(countryData.population);
          setRightUrl(countryData.flags.png);
        })
        .catch((error) =>
          console.error("Error fetching data for right country:", error)
        );
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data: { name: { common: string } }[]) => {
        const names = data.map((country) => country.name.common);
        setCountryNames(names);
      })
      .catch((error) => console.error("Error fetching country names:", error));
  }, []);
  useEffect(() => {
    if (countryNames.length > 0) {
      const randomIndex1 = Math.floor(Math.random() * countryNames.length);
      const randomIndex2 = Math.floor(Math.random() * countryNames.length);
      const countryName1 = countryNames[randomIndex1];
      const countryName2 = countryNames[randomIndex2];

      fetch(
        `https://restcountries.com/v3.1/name/${countryName1}?fields=population,name,flags`
      )
        .then((res) => res.json())
        .then((data) => {
          const countryData = data[0];
          setLeftCountry(countryData.name.common);
          setLeftPopulation(countryData.population);
          setLeftUrl(countryData.flags.png);
        })
        .catch((error) =>
          console.error("Error fetching data for left country:", error)
        );

      fetch(
        `https://restcountries.com/v3.1/name/${countryName2}?fields=population,name,flags`
      )
        .then((res) => res.json())
        .then((data) => {
          const countryData = data[0];
          setRightCountry(countryData.name.common);
          setRightPopulation(countryData.population);
          setRightUrl(countryData.flags.png);
        })
        .catch((error) =>
          console.error("Error fetching data for right country:", error)
        );
    }
  }, [countryNames]);
  return (
    <div>
      {isModalOpen && (
        <Modal
          header={result}
          text={gameoverMsg}
          color={bg}
          onClose={handleCloseModal}
          buttonText="New game"
        ></Modal>
      )}
      <div className="relative lg:absolute z-10 lg:top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 p-4 bg-accent lg:rounded-full lg:border-2 border-primary text-center">
        <p className="text-lg text-foreground">
          Score: <span className="text-primary">{score}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] bg-background text-foreground divide-y-4 lg:divide-x-4 lg:divide-y-0 divide-primary">
        <div className="bg-border flex justify-center items-center">
          <LeftCard
            countryName={leftCountry}
            imgUrl={leftUrl}
            population={leftPopulation}
          />
        </div>
        <div className="bg-background flex justify-center items-center">
          <RightCard
            countryName={rightCountry}
            imgUrl={rightUrl}
            onGuess={isCorrectGuess}
          />
        </div>
      </div>
    </div>
  );
};

export default HigherLower;
