import React, { MouseEvent, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

interface EventCardProps {
  name: string;
  description: string;
  cardColor?:string;
  updateYear: (name: string, newYear: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
  updateYear,
  cardColor
}) => {
  const [year, setYear] = useState<string>("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState("z-10");
  const nodeRef = useRef(null);
  if(!cardColor){
    cardColor = "bg-card"
  }

  //Calc "year" based on where card is on the x-axis
  useEffect(() => {
    const parentWidth = document.querySelector(".parent")?.clientWidth ?? 0;
    const cardWidth = 160;
    const maxPositionX = parentWidth - cardWidth;
    const percent = (position.x / maxPositionX) * 100;
    if (percent <= 0) {
      setYear("2000 BCE");
    } else if (percent >= 100) {
      setYear("2000 CE");
    } else {
      const yearDiff = Math.round((percent / 100) * 4000);
      const era = yearDiff <= 2000 ? "BCE" : "CE";
      const absYear = era === "BCE" ? 2000 - yearDiff : yearDiff - 2000;
      setYear(`${absYear} ${era}`);
    }
    updateYear(name, year);
  }, [position]);

  //Update pos on drag
  const trackPos = (data: any) => {
    setPosition({ x: data.x, y: data.y });
  };
  //Z-index toggle to always push dragged card to front
  const handleStart = () => {
    setZIndex("z-20");
  };

  const handleStop = () => {
    setZIndex("z-10");
  };

  return (
    <Draggable
      axis="x"
      onDrag={(e, data) => trackPos(data)}
      bounds="parent"
      onStart={handleStart}
      onStop={handleStop}
      defaultClassName="event-card"
      nodeRef={nodeRef}
    >
      <div
        className={`absolute top-0 max-w-40 cursor-pointer ${zIndex}`}
        ref={nodeRef}
      >
        <div className="bg-primary_hover h-8 w-1 relative bottom-0 left-1/2"></div>
        <div className={`flex flex-col max-w-40 min-w-40 min-h-40 text-foreground text-center rounded-lg p-5 border border-primary select-none ${cardColor}`}>
          <div className="text-lg font-semibold name">{name}</div>
          <div className="text-xs font-normal">{description}</div>
          <div className="text-foreground bg-muted_foreground rounded-lg p-1 mt-2 year-guess">
            ~{year}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default EventCard;
