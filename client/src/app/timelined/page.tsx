"use client";
import React from "react";
import EventCard from "../components/timelined/EventCard";
import Button from "../components/Button";

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
          <div className="text-primary text-lg font-semibold">TimeLined</div>
          <div className="text-secondary_foreground">
            Drag the events in the correct order in 3 tries
          </div>
        </div>
      </div>
      <div className="w-full">
        <EventCard
          name={"WW2"}
          description={"The start of World War 2"}
        ></EventCard>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-full h-2 rounded-full bg-primary m-20 mt-0">
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
      <div className="flex justify-end mr-10">
        <Button name={"Submit"} href={"/"}></Button>
      </div>
    </div>
  );
};

export default TimeLined;
