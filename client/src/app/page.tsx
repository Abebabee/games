import GameCard from "./components/GameCard";

const IndexPage = () => {
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-6 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <GameCard
            gameName={"Higher/Lower"}
            gameUrl="/higherlower"
            imageUrl={"https://placehold.co/600x400"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
          />
          <GameCard
            gameName={"Game 2"}
            gameUrl="/higherlower"
            imageUrl={"https://placehold.co/200x400"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
          />
          <GameCard
            gameName={"Game 3"}
            gameUrl="/higherlower"
            imageUrl={"https://placehold.co/400x400"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
          />
          <GameCard
            gameName={"Game 4"}
            gameUrl="/higherlower"
            imageUrl={"https://placehold.co/400x400"}
            description={
              "Guess if country has higher or lower population than the other country"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
