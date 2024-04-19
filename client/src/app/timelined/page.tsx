// TimeLined.tsx

import React from "react";

const TimeLined: React.FC = () => {
  const nodes = [
    { year: "2000 BCE", position: "0%" },
    { year: "1 AD", position: "50%" },
    { year: "2000 AD", position: "100%" },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div>
        <div className="flex flex-col justify-center items-center p-8">
          <div className="text-primary text-lg">TimeLined</div>
          <div className="text-secondary_foreground">Sort the events in the correct order in 3 tries</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-full h-2 rounded-full bg-primary m-10">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              <div
                className="absolute w-2 h-2 bg-red-500 rounded-full"
                style={{
                  left: node.position,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute w-4 h-4 bg-primary rounded-full"
                style={{
                  left: node.position,
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                className="absolute mt-3 text-foreground"
                style={{
                  left: node.position,
                  transform: "translate(-50%, 10px)",
                }}
              >
                {node.year}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLined;
