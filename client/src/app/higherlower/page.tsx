import Button from "../components/Button";

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
        </div>
        <div className="bg-background flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default HigherLower;
