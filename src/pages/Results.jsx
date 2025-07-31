import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchFlights } from "../api/flightApi";
import FlightCard from "../components/FlightCard";

// Results page: Fetches and displays available flights based on search parameters

const Results = () => {
  // Get search parameters from the URL (with defaults for demo/testing)
  const [searchParams] = useSearchParams();
  const originSkyId = searchParams.get("originSkyId") || "DEL";
  const destinationSkyId = searchParams.get("destinationSkyId") || "NYC";
  const originEntityId = searchParams.get("originEntityId") || "27544008";
  const destinationEntityId = searchParams.get("destinationEntityId") || "27537542";
  const date = searchParams.get("date") || "2025-07-31";
  // State for fetched flights and loading indicator
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch flights when search parameters change
    fetchFlights(originSkyId, destinationSkyId, date, originEntityId, destinationEntityId)
      .then(data => {
        console.log('API response:', data); // Debug: log API response
        setFlights(data?.data?.itineraries || []); // Set flights or empty array
        setLoading(false);
      })
      .catch(err => {
        console.error('API error:', err); // Debug: log API error
        setLoading(false);
      });
  }, [originSkyId, destinationSkyId, date, originEntityId, destinationEntityId]);

  // Show loading or no results messages
  if (loading) return <p className="results-message">Loading flights...</p>;
  if (!flights?.length) return <p className="results-message">No flights found.</p>;

  // Render list of available flights
  return (
    <div className="results-list">
      <h2 className="results-title">Available Flights</h2>
      {flights.map((f, idx) => (
        <FlightCard key={idx} flight={f} />
      ))}
    </div>
  );
};

export default Results;
