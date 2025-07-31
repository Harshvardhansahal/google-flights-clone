
import axios from "axios";

// Base URL for the flight search API
const BASE_URL = "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights";

// API request options including authentication headers
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7cf48722cfmsh60f85670a8d0289p1fa970jsn6dbee20d4ac4", // Replace with your own API key for production
    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
  },
};

// Fetch flights from the API with given parameters
export const fetchFlights = async (
  originSkyId,
  destinationSkyId,
  date,
  originEntityId,
  destinationEntityId
) => {
  // Build query parameters for the API request
  const params = new URLSearchParams({
    originSkyId,
    destinationSkyId,
    originEntityId,
    destinationEntityId,
    date,
    cabinClass: "economy", // Only economy class is supported in this demo
    adults: "1", // Number of adult passengers
    sortBy: "best", // Sort results by best flights
    currency: "USD",
    market: "en-US",
    countryCode: "IN"
  });
  // Construct the full API URL
  const url = `${BASE_URL}?${params.toString()}`;
  // Make the GET request using axios
  const res = await axios.get(url, options);
  // Return the API response data
  return res.data;
};
