interface GameCardProps{
    gameName: string;
    imageUrl: string;
    description: string;
}

const GameCard = ({gameName, imageUrl, description}:GameCardProps) => {
  return (
    <div className="max-w-sm bg-card border border-border overflow-hidden rounded-lg shadow text-foreground">
      <img
        alt={gameName}
        className="h-60 w-full object-cover"
        height="300"
        src={imageUrl}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="flex flex-col justify-center items-center p-3 text-center">
        <div className="text-lg font-bold">{gameName}</div>
        <div className="text-muted_foreground">{description}</div>
      </div>
    </div>
  );
};

export default GameCard;
