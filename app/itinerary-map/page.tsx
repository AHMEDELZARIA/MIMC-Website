export default function ItineraryPage() {
  return (
    <div>
      {/* Section Title */}
      <h1 className="text-7xl font-bold mb-8 text-center relative group">
        <span className="inline-block relative">
          ITINERARY & MAP
          {/* Underline Animation */}
          <span className="absolute left-1/2 bottom-0 h-[3px] w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0" />
        </span>
      </h1>
    </div>
  );
}
