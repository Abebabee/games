"use client"

import { useEffect, useState } from "react";
import LeftCard from "../components/higherlower/LeftCard";
import RightCard from "../components/higherlower/RightCard";

const HigherLower = () => {
    const [score, setScore] = useState(0)
    const [countryNames, setCountryNames] = useState<string[]>([]);
    const [rightCountry, setRightCountry] = useState<any>();
    const [rightPopulation, setRightPopulation] = useState<any>();
    const [rightUrl, setRightUrl] = useState<any>();
    const [leftCountry, setLeftCountry] = useState<any>();
    const [leftPopulation, setLeftPopulation] = useState<any>();
    const [leftUrl, setLeftUrl] = useState<any>();

    const isCorrectGuess = (guess:boolean) =>{
        if(rightPopulation>leftPopulation && guess){
            setScore(score+1)
        }else if(rightPopulation<leftPopulation && !guess){
            setScore(score+1)
        }else{
            setScore(0)
        }
        changeCards();

    }
    const changeCards = () =>{
        setLeftCountry(rightCountry)
        setLeftUrl(rightUrl)
        setLeftPopulation(rightPopulation)
        generateCountry();
    }
    const generateCountry = () =>{
        if (countryNames.length > 0) {
            const randomIndex1 = Math.floor(Math.random() * countryNames.length);
            const countryName1 = countryNames[randomIndex1];
            fetch(`https://restcountries.com/v3.1/name/${countryName1}?fields=population,name,flags`)
                .then(res => res.json())
                .then(data => {
                    const countryData = data[0];
                    setRightCountry(countryData.name.common);
                    setRightPopulation(countryData.population);
                    setRightUrl(countryData.flags.png);
                })
                .catch(error => console.error('Error fetching data for right country:', error));
        }
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(res => res.json())
            .then((data: { name: { common: string } }[]) => {
                const names = data.map(country => country.name.common);
                setCountryNames(names);
            })
            .catch(error => console.error('Error fetching country names:', error));
    }, []);
    useEffect(() => {
        if (countryNames.length > 0) {
            const randomIndex1 = Math.floor(Math.random() * countryNames.length);
            const randomIndex2 = Math.floor(Math.random() * countryNames.length);
            const countryName1 = countryNames[randomIndex1];
            const countryName2 = countryNames[randomIndex2];

            fetch(`https://restcountries.com/v3.1/name/${countryName1}?fields=population,name,flags`)
                .then(res => res.json())
                .then(data => {
                    const countryData = data[0];
                    setLeftCountry(countryData.name.common);
                    setLeftPopulation(countryData.population);
                    setLeftUrl(countryData.flags.png);
                })
                .catch(error => console.error('Error fetching data for left country:', error));

            fetch(`https://restcountries.com/v3.1/name/${countryName2}?fields=population,name,flags`)
                .then(res => res.json())
                .then(data => {
                    const countryData = data[0];
                    setRightCountry(countryData.name.common);
                    setRightPopulation(countryData.population);
                    setRightUrl(countryData.flags.png);
                })
                .catch(error => console.error('Error fetching data for right country:', error));
        }
    }, [countryNames]);
  return (
    <div>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-accent rounded-full border-2 border-primary">
        <p className="text-lg text-foreground">
          Score: <span className="text-primary">{score}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] bg-background text-foreground divide-y-4 lg:divide-x-4 lg:divide-y-0 divide-primary">
        <div className="bg-border flex justify-center items-center">
          <LeftCard countryName={leftCountry} imgUrl={leftUrl} population={leftPopulation}/>
        </div>
        <div className="bg-background flex justify-center items-center">
          <RightCard countryName={rightCountry} imgUrl={rightUrl} onGuess={isCorrectGuess}/>
        </div>
      </div>
    </div>
  );
};

export default HigherLower;