import GameCard from "./components/GameCard";

const IndexPage = () => {
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <GameCard
            gameName={"PopulationGuessr"}
            gameUrl="/higherlower"
            imageUrl={"PopulationGuessr.png"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
          />
          <GameCard
            gameName={"TimeLined"}
            gameUrl="/timelined"
            imageUrl={"TimeLined.png"}
            description={
              "Drag historical events in the correct order in 3 tries (updates daily)"
            }
          />
          <GameCard
            gameName={"WorldWits"}
            gameUrl="/worldwits"
            imageUrl={"WorldWits.png"}
            description={
              "Guess the famous location based on as few hints as possible (updates daily)"
            }
          />
          <GameCard
            gameName={"BehindYou"}
            gameUrl="/behindyou"
            imageUrl={"BehindYou.png"}
            description={
              "You are looking away from a famous building/location, guess where! (updates daily)"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
