"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import stringSimilarity from "string-similarity-js";
import Modal from "../components/modal";
import { useRouter } from "next/navigation";

const BehindYou = () => {
  const [guesses, setGuesses] = useState(5);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameoverMsg, setGameoverMsg] = useState("");
  const [result, setResult] = useState("");
  const [bg, setBg] = useState("");
  const router = useRouter();
  const location = "Taj Mahal";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    setGuesses(guesses - 1);
    //Dice coefficient to check similarity of guess and actual name
    const similarity = stringSimilarity(userInput.toLowerCase(), location);
    console.log(similarity)
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
        setGameoverMsg("You didn't solve todays game, try again tomorrow!");
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
    <div className="min-h-[calc(100vh-4rem)] bg-background flex flex-col justify-center items-center">
      {isModalOpen && (
        <Modal
          header={result}
          text={gameoverMsg}
          color={bg}
          onClose={handleCloseModal}
        ></Modal>
      )}
      <div className="flex flex-row text-primary space-x-2 pb-4">
        <div className="flex flex-row items-center space-x-1 bg-muted rounded-lg p-2">
        {Array.from({ length: 5 }, (_, index) => (
          <React.Fragment key={index}>
            {index < guesses ? (
                <FaHeart size={20} />
            ) : (
              <FaHeartBroken className="text-primary_hover" size={20} />
            )}
          </React.Fragment>
        )).reverse()}
        </div>
        <p className="p-2">Guesses left: {guesses}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-foreground pb-5 container mx-auto rounded-lg pt-6">
        <div>
          <TransformWrapper>
            <TransformComponent>
              <img
                src="BehindYou_entry.png"
                alt=""
                className="object-contain mx-auto pt-4 rounded-lg"
                width={"80%"}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="pt-4">
          <p>What famous place lies behind you?</p>
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
export default BehindYou;
