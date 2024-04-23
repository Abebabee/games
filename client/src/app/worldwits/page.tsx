import Button from "../components/Button";

const WorldWits: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col items-center">
      <div className="flex flex-col justify-center items-center p-6 text-secondary_foreground">
        <div className="text-primary text-2xl font-semibold">WorldWits</div>
        <div>Guess the famous location in as few hints as possible!</div>
        <div>A new hint is revealed after an incorrect guess</div>
      </div>
      <div className="bg-card text-foreground flex flex-col justify-center items-center rounded-lg shadow border border-border p-4">
        <div></div>
        <div>
          <div>Hint1</div>
          <div>Hint2</div>
          <div>Hint3</div>
          <div>Hint4</div>
        </div>
        <div>
          <input
            type="text"
            className="bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 pl-2 border border-border mr-2 mt-6"/>
          <Button name={"Submit"} href={"#"}></Button>
        </div>
      </div>
    </div>
  );
};

export default WorldWits;
