interface LeftCardProps {
    countryName: string;
    imgUrl: string;
    population: string;
}

const LeftCard = ({countryName, imgUrl, population}: LeftCardProps) => {
    return(
        <div className="bg-card m-5 max-w-sm h-80 overflow-hidden rounded-lg shadow text-foreground">
        <div>
          <img
            alt=""
            className="min-h-40 max-h-60 w-full object-cover"
            src={imgUrl}
            style={{
              aspectRatio: "400/300",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-2">
          <p className="font-bold">{countryName}</p>
          <p>
            Population: <span className="text-primary">{population}</span>
          </p>
        </div>
      </div>
    )
};

export default LeftCard;
