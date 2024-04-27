interface RightCardProps {
    countryName: string;
    imgUrl: string;
    onGuess: (guess: boolean) => void;
}

const RightCard = ({countryName, imgUrl, onGuess}: RightCardProps) => {
    const handleHigherClick = () => {
        onGuess(true); // Pass true (Higher) to parent
    };

    const handleLowerClick = () => {
        onGuess(false); // Pass false (Lower) to parent
    };
    return(
        <div className="bg-card m-5 max-w-sm overflow-hidden rounded-lg shadow text-foreground border border-border">
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
            <div className="flex flex-col justify-center items-center p-2">
              <p className="font-bold">{countryName}</p>
              <p>has a</p>
              <button className="border-2 border-primary p-1 px-2 rounded-lg hover:border-primary_hover mb-2"
              onClick={handleHigherClick}
              >
                Higher
              </button>
              <button className="border-2 border-primary p-1 px-2 rounded-lg hover:border-primary_hover"
              onClick={handleLowerClick}
              >
                Lower
              </button>
              <p>population than Somalia</p>
            </div>
          </div>
    )
}

export default RightCard