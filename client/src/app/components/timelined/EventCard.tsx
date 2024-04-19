interface EventCardProps {
  name: string;
  description: string;
}
const EventCard = ({ name, description }: EventCardProps) => {
  return (
    <div className="max-w-40">
      <div className="flex flex-col max-h-40 max-w-40 bg-card text-foreground text-center rounded-lg p-5 border border-primary">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm font-normal">{description}</div>
      </div>
      <div className="bg-primary_hover h-8 w-1 relative bottom-0 left-1/2"></div>
    </div>
  );
};
export default EventCard;
