import GameCard from "./components/GameCard";

const index = () => {
  return (
    <section className="grid grid-cols-1 content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-8 lg:p-10 bg-background h-[calc(100vh-4rem)]">
      <GameCard
        gameName={"Higher/Lower"}
        imageUrl={"https://placehold.co/600x400"}
        description={
          "Guess if country has higher or lower population than the other country"
        }
      />
      <GameCard
        gameName={"Game 2"}
        imageUrl={"https://placehold.co/200x400"}
        description={
          "Guess if country has higher or lower population than the other country"
        }
      />
      <GameCard
        gameName={"Game 3"}
        imageUrl={"https://placehold.co/400x400"}
        description={
          "Guess if country has higher or lower population than the other country"
        }
      />
      <GameCard
        gameName={"Game 4"}
        imageUrl={"https://placehold.co/400x400"}
        description={
          "Guess if country has higher or lower population than the other country"
        }
      />
    </section>
  );
};
export default index;
