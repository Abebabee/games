interface RightCardProps {}

const RightCard = ({}: RightCardProps) => {

    return(
        <div className="bg-card m-5 max-w-sm overflow-hidden rounded-lg shadow text-foreground border border-border">
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
            <div className="flex flex-col justify-center items-center p-2">
              <p className="font-bold">Sweden</p>
              <p>has a</p>
              <button className="border-2 border-primary p-1 px-2 rounded-lg hover:border-primary_hover mb-2">
                Higher
              </button>
              <button className="border-2 border-primary p-1 px-2 rounded-lg hover:border-primary_hover">
                Lower
              </button>
              <p>population than Somalia</p>
            </div>
          </div>
    )
}

export default RightCard