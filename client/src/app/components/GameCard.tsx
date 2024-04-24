import { Suspense } from "react";
import Button from "./Button";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  description: string;
  gameUrl: string;
  scoreType: string;
  score: number;
}

const GameCard = ({ gameName, imageUrl, description, gameUrl, scoreType, score }: GameCardProps) => {
  return (
    <div className="max-w-sm bg-card border border-border overflow-hidden rounded-lg shadow text-foreground">
      <img
        alt={gameName}
        className="h-60 w-full object-cover inset-0 shadow-lg border-2 border-border"
        src={imageUrl}
        style={{
          aspectRatio: "400/400",
          
        }}
      />
      <div className="p-3">
        <div className="text-lg font-bold text-center">{gameName}</div>
        <div className="text-muted_foreground text-center">{description}</div>
        <div className="flex justify-between mt-4">
          <div className="text-center">
            <p>{scoreType}: <span className="text-primary">{score}</span></p>
          </div>
          <Button name="Play" href={gameUrl}/>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
