
// FlightCard component: displays details for a single flight
const FlightCard = ({ flight }) => {
  // Get the first leg/segment of the flight
  const segment = flight?.legs?.[0];
  return (
    <div className="flight-card">
      {/* Airline code */}
      <h3 className="flight-airline">{flight.airlineCodes?.[0]}</h3>
      {/* Departure and arrival times */}
      <p>{segment?.departureTime} → {segment?.arrivalTime}</p>
      {/* Origin and destination codes */}
      <p>From {segment?.origin?.displayCode} to {segment?.destination?.displayCode}</p>
      {/* Price */}
      <p>Price: ${flight?.price?.raw}</p>
    </div>
  );
};

export default FlightCard;
