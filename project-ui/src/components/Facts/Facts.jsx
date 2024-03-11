import React, { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "../Facts/Facts.css";


export default function Facts() {
  const [facts, setFacts] = useState([]);
  const [limit, setLimit] = useState(null);
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/facts?limit=${limit}`,
        {
          headers: {
            "X-Api-Key": "kzOrF3CbOoNwkrP7cmvrDA==wSPWNvXpvJ4MRsdd",
          },
        }
      );
      setFacts(response.data);
      setError(null); // Reset error state on successful fetch
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later."); // Set error message
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    fetchData(); // Fetch data when form is submitted
    setLimit(null);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <>
      <Header />
      <h2 className="facts-title">Enter Limit</h2>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input type="number" value={limit} onChange={handleLimitChange} className="facts-search"/>
          <button type="submit" className="facts-btn">Submit</button>
        </form>
      </div>
      <h2 className="facts-title">Random Facts...</h2>
      <div className="facts-container">
        {error ? (
          <div>{error}</div>
        ) : facts.length ? (
          facts.map((fact, index) => (
            <div className="fact-card" style={{ width: "18rem" }} key={fact.id}>
              <div className="card-info">
                <h5 className="card-title">Fact {index + 1}</h5>
                <p>{fact.fact}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>Search for Fun Facts!</p>
          </div>
        )}
      </div>
    </>
  );
}
