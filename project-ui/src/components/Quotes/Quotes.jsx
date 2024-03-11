import React, { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import "../Quotes/Quotes.css";

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [category, setCategory] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: {
            "X-Api-Key": "kzOrF3CbOoNwkrP7cmvrDA==wSPWNvXpvJ4MRsdd",
          },
        }
      );
      if (response.data.length > 0) {
        setQuote(response.data[0]); //first quote
        console.log(response.data);
      } else {
        setQuote(null); // If no quotes are found for the selected category
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchData();
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Header />
      <h2 className="quote-title">Select A Quote Category</h2>
      <div className="quote-form-container">
        <form onSubmit={handleSubmit} className="quote-form">
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="field"
          >
            <option value="">-- Please select a category --</option>
            <option value="dreams">Dreams</option>
            <option value="faith">Faith</option>
            <option value="failure">Failure</option>
            <option value="friendship">Friendship</option>
            <option value="forgiveness">Forgiveness</option>
            <option value="love">Love</option>
            <option value="happiness">Happiness</option>
            <option value="inspirational">Inspirational</option>
          </select>
          <button type="submit" className="quotes-btn">
            Search
          </button>
        </form>
      </div>

      {quote.lent !== 0 ? (
        <div className="quote-container">
          <div className="card">
            <div className="card-header">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{quote.quote}</p>
                <footer className="blockquote-footer">
                  - {quote.author} | {quote.category}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <p> Search For Quotes! </p>{" "}
        </div>
      )}
    </>
  );
}
