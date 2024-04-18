interface LeftCardProps {}

const LeftCard = ({}: LeftCardProps) => {
    return(
        <div className="bg-card m-5 max-w-sm h-80 overflow-hidden rounded-lg shadow text-foreground">
        <div>
          <img
            alt=""
            className="h-60 w-full object-cover"
            src={"https://placehold.co/200x400"}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-2">
          <p className="font-bold">Somalia</p>
          <p>
            Population: <span className="text-primary">251251250</span>
          </p>
        </div>
      </div>
    )
};

export default LeftCard;
