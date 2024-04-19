import React, { useState } from "react";

interface EventCardProps {
  name: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, description }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX - positionX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newPositionX = event.clientX - startX;
      const parentWidth = event.currentTarget.parentElement?.clientWidth ?? 0;
      const cardWidth = event.currentTarget.clientWidth;
      const maxPositionX = parentWidth - cardWidth;
      setPositionX(Math.max(0, Math.min(newPositionX, maxPositionX)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="max-w-40"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="flex flex-col max-h-40 max-w-40 bg-card text-foreground text-center rounded-lg p-5 border border-primary"
        style={{ transform: `translateX(${positionX}px)` }}
      >
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm font-normal">{description}</div>
      </div>
      <div
        className="bg-primary_hover h-8 w-1 relative bottom-0 left-1/2"
        style={{ transform: `translateX(${positionX}px)` }}
      ></div>
    </div>
  );
};

export default EventCard;
