"use client";
import { useState } from "react";
import Button from "../components/Button";
import stringSimilarity from "string-similarity-js";

const WorldWits: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [guesses, setGuesses] = useState(5);

  const famousLocation = {
    name: "Eiffel Tower",
    hints: [
      "Hint 1: This iconic iron structure is located in the heart of a European capital known for its romance and art.",
      "Hint 2: It was constructed as the entrance arch for the 1889 World's Fair and has since become a symbol of France.",
      "Hint 3: The architect behind this masterpiece also played a key role in designing the framework of a famous statue gifted to the United States.",
      "Hint 4: At a height of over 300 meters, it was once the tallest man-made structure in the world.",
      "Hint 5: Every year, millions of tourists flock to this landmark to marvel at its beauty and breathtaking views of the city.",
    ],
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    //Dice coefficient to check similarity of guess and actual name
    const similarity = stringSimilarity(
      userInput.toLowerCase(),
      famousLocation.name.toLowerCase()
    );
    if (similarity >= 0.8) {
      console.log("WIN!!");
    } else {
      setGuesses(guesses - 1);
      if (guesses === 0) {
        //Lose
      } else {
        setUserInput("");
      }
    }
  };
  
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col items-center">
      <div className="flex flex-col justify-center items-center p-6 text-secondary_foreground">
        <div className="text-primary text-2xl font-semibold">WorldWits</div>
        <div>Guess the famous location in as few hints as possible!</div>
        <div>A new hint is revealed after an incorrect guess</div>
      </div>
      <div className="bg-card text-foreground flex flex-col justify-center items-center rounded-lg shadow border border-border p-4">
        <div></div>
        <div className="divide-y space-y-2 max-w-sm">
          <div>{famousLocation.hints[0]}</div>
          {famousLocation.hints.slice(1, 6 - guesses).map((hint, index) => (
            <div key={index}>{hint}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            className="bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 pl-2 border border-border mr-2 mt-6"
            value={userInput}
            onChange={handleInputChange}
          />
          <Button name={"Submit"} href={"#"} onClick={handleSubmit}></Button>
        </div>
      </div>
    </div>
  );
};

export default WorldWits;
