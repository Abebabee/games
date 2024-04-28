"use client"
import { useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import Cookies from "js-cookie";

const IndexPage = () => {
  const [populationHighscore, setPopulationHighscore] = useState(0);
  const [timelinedStreak, setTimelinedStreak] = useState(0);
  const [worldwitsStreak, setWorldwitsStreak] = useState(0);
  const [behindyouStreak, setBehindyouStreak] = useState(0);

  useEffect(() => {
    const savedHighscore = Cookies.get("highscore");
    console.log("Hej!")
    if (savedHighscore) {
      setPopulationHighscore(parseInt(savedHighscore));
    }
  }, []);

  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <GameCard
            gameName={"PopulationGuessr"}
            gameUrl="./higherlower"
            imageUrl={"./PopulationGuessr.png"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
            scoreType="Highscore"
            score={populationHighscore}
          />
          <GameCard
            gameName={"TimeLined"}
            gameUrl="./timelined"
            imageUrl={"./TimeLined.png"}
            description={
              "Drag historical events in the correct order in 3 tries (updates daily)"
            }
            scoreType="Streak"
            score={4}
          />
          <GameCard
            gameName={"WorldWits"}
            gameUrl="./worldwits"
            imageUrl={"./WorldWits.png"}
            description={
              "Guess the famous location based on as few hints as possible (updates daily)"
            }
            scoreType="Streak"
            score={4}
          />
          <GameCard
            gameName={"BehindYou"}
            gameUrl="./behindyou"
            imageUrl={"./BehindYou.png"}
            description={
              "You are looking away from a famous building/location, guess where! (updates daily)"
            }
            scoreType="Streak"
            score={4}
          />
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
