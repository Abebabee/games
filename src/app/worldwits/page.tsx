"use client";
import { useState } from "react";
import Button from "../components/Button";
import stringSimilarity from "string-similarity-js";
import React from "react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import Modal from "../components/modal";
import { useRouter } from "next/navigation";

interface famousLocation {
  name: string;
  hints: string[5];
}
const WorldWits: React.FC = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const [guesses, setGuesses] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameoverMsg, setGameoverMsg] = useState("");
  const [result, setResult] = useState("");
  const [bg, setBg] = useState("");
  const [location, setLocation] = useState("");
  const [hints, setHints] = useState<string[]>([]);
  const famousLocation = {
    name: "Eiffel Tower",
    hints: [
      "This iconic iron structure is located in the heart of a European capital known for its romance and art.",
      "It was constructed as the entrance arch for the 1889 World's Fair and has since become a symbol of France.",
      "The architect behind this masterpiece also played a key role in designing the framework of a famous statue gifted to the United States.",
      "At a height of over 300 meters, it was once the tallest man-made structure in the world.",
      "Every year, millions of tourists flock to this landmark to marvel at its beauty and breathtaking views of the city.",
    ],
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const fetchLocations = () => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=9HOTY_-J5mbftB3HrCg8VPrMivl4Tgc9s2_A5sy10P4zD_JFONnO7FyvtbJNvPeh1OES7leRjF0bIBAV3wrWRMxd_XJ5vSkgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEz3f5htoi7lbb7Oe3ZgAVg3jn3DPw7hwnzZC-NQCu0xo67lCt0G4OVvjji2VPx1grXXUUSxoGeKyQjd7dMID-hD46dGIcX8vtz9Jw9Md8uu&lib=Mdvo9WQE0uMRFYwASCKGaOs3oQZ0F0ENL"
    )
      .then((response) => response.json())
      .then((data) => {
        //rand 0-data.data.length
        //setName = data.data[rand].name
        setLocation(data.data[0].name);
        setHints(data.data[0].hints);
      })
      .catch((error) => console.error(error));
  };
  fetchLocations();

  const handleSubmit = () => {
    setGuesses(guesses - 1);
    //Dice coefficient to check similarity of guess and actual name
    const similarity = stringSimilarity(
      userInput.toLowerCase(),
      famousLocation.name.toLowerCase()
    );
    if (similarity >= 0.7) {
      setResult("Win");
      setGameoverMsg(
        "You solved it in " + (6 - guesses) + " tries, see you tomorrow!"
      );
      setBg("bg-green");
      setIsModalOpen(true);
    } else {
      if (guesses === 1) {
        setResult("Lose");
        setGameoverMsg("The correct answer was "+location+", try again tomorrow!");
        setBg("bg-primary");
        setIsModalOpen(true);
      } else {
        setUserInput("");
      }
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col items-center">
      {isModalOpen && (
        <Modal
          header={result}
          text={gameoverMsg}
          color={bg}
          onClose={handleCloseModal}
        ></Modal>
      )}

      <div className="flex flex-col justify-center items-center p-6 text-secondary_foreground">
        <div className="text-primary text-2xl font-semibold">WorldWits</div>
        <div>Guess the famous location in as few hints as possible!</div>
        <div>A new hint is revealed after an incorrect guess</div>
      </div>
      <div className="flex flex-row text-primary space-x-2 pb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <React.Fragment key={index}>
            {index < guesses ? (
              <div className="flex flex-row">
                <FaHeart size={20} />
              </div>
            ) : (
              <FaHeartBroken className="text-primary_hover" size={20} />
            )}
          </React.Fragment>
        )).reverse()}
        <p className="pl-2">Guesses left: {guesses}</p>
      </div>
      <div className="bg-card text-foreground flex flex-col justify-center items-center rounded-lg shadow border border-border p-4">
        <div></div>
        <div className="space-y-2 max-w-sm">
          <div>
            <div className="underline">Hint 1:</div>
            {hints && <div>{hints[0]}</div>}
          </div>
          {hints && (
            <div>
              {hints.slice(1, 6 - guesses).map((hint, index) => (
                <div key={index}>
                  <div className="underline">Hint {index + 2}:</div>
                  <div>{hint}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <input
            type="text"
            className="bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg p-1 pl-2 border border-border mr-2 mt-6"
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button name={"Submit"} href={"#"} onClick={handleSubmit}></Button>
        </div>
      </div>
    </div>
  );
};

export default WorldWits;
