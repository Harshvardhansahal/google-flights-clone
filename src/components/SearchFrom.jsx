import { useState } from "react";
import { useNavigate } from "react-router-dom";

// SearchForm component: handles user input for flight search

const SearchForm = () => {
  // State for origin, destination, and date fields
  const [origin, setOrigin] = useState("DEL");
  const [destination, setDestination] = useState("NYC");
  const [date, setDate] = useState("");
  const navigate = useNavigate(); // For navigation after form submit

  // Handle form submission: prevent default and navigate to results page with query params
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?origin=${origin}&destination=${destination}&date=${date}`);
  };

  // Render the search form
  return (
    <form onSubmit={handleSubmit} className="search-form">
      {/* Origin input */}
      <input className="input" placeholder="Origin (e.g. DEL)" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
      {/* Destination input */}
      <input className="input" placeholder="Destination (e.g. NYC)" value={destination} onChange={(e) => setDestination(e.target.value)} required />
      {/* Date input */}
      <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button className="search-btn" type="submit">Search Flights</button>
    </form>
  );
};

export default SearchForm;
