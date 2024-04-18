import LeftCard from "../components/higherlower/LeftCard";
import RightCard from "../components/higherlower/RightCard";

const HigherLower = () => {
  return (
    <div>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-accent rounded-full border-2 border-primary">
        <p className="text-lg text-foreground">
          Score: <span className="text-primary">0</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] bg-background text-foreground divide-y-4 lg:divide-x-4 lg:divide-y-0 divide-primary">
        <div className="bg-border flex justify-center items-center">
          <LeftCard/>
        </div>
        <div className="bg-background flex justify-center items-center">
          <RightCard/>
        </div>
      </div>
    </div>
  );
};

export default HigherLower;
