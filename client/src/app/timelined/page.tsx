"use client";
import React, { useState } from "react";
import EventCard from "../components/timelined/EventCard";
import Button from "../components/Button";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const TimeLined: React.FC = () => {
  const [guessesLeft, setGuessesLeft] = useState(3);
  const nodes = [
    { year: "2000 BCE", position: "0%" },
    { year: "1 CE", position: "50%" },
    { year: "2000 CE", position: "100%" },
  ];
  const historicalEvents = [
    {
      name: "Roman Empire Established",
      description:
        "The city of Rome is traditionally founded, marking the beginning of the Roman Empire.",
      year: "753 BCE",
    },
    {
      name: "Battle of Hastings",
      description:
        "William the Conqueror defeats King Harold II of England, leading to the Norman conquest of England.",
      year: "1066 CE",
    },
    {
      name: "Columbus Reaches the Americas",
      description:
        "Christopher Columbus arrives in the Americas, initiating European exploration and colonization.",
      year: "1492 CE",
    },
    {
      name: "French Revolution Begins",
      description:
        "The French Revolution erupts with the storming of the Bastille, leading to radical political and social changes in France.",
      year: "1789 CE",
    },
    {
      name: "First Moon Landing",
      description:
        "Apollo 11 mission successfully lands astronauts Neil Armstrong and Buzz Aldrin on the moon.",
      year: "1969 CE",
    },
  ];
  const handleSubmit = () =>{
    setGuessesLeft(guessesLeft-1);
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div>
        <div className="flex flex-col justify-center items-center p-8">
          <div className="text-primary text-lg font-semibold">TimeLined</div>
          <div className="text-secondary_foreground">
            Drag the events in the correct order in 3 tries
          </div>
          <div className="flex flex-row text-primary space-x-2 pt-2">
            {Array.from({ length: 3 }, (_, index) => (
              <React.Fragment key={index}>
                {index < guessesLeft ? (
                  <FaHeart size={20}/>
                ) : (
                  <FaHeartBroken className="text-primary_hover" size={20}/>
                )}
              </React.Fragment>
            )).reverse()}
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-10 mb-10">
        <Button name={"Submit"} href={"#"} onClick={handleSubmit}></Button>
      </div>
      <div className="w-full relative flex flex-row parent">
        {historicalEvents.map((event, index) => (
          <EventCard
            key={index}
            name={event.name}
            description={event.description}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div className="relative w-full h-2 rounded-full bg-primary m-20 mt-0 timeline">
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
                  top: "calc(-100% - 35px)", // Adjusted position to be above the timeline
                  transform: "translateX(-50%)", // Center horizontally
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
