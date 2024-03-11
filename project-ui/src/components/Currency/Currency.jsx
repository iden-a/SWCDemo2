import React, { useState } from "react";
import axios from "axios";
import Header from '../Header/Header';
import '../Currency/Currency.css'

export default function Currency() {
    const [amount, setAmount] = useState(100);
    const [wantCurrency, setWantCurrency] = useState('');
    const [haveCurrency, setHaveCurrency] = useState('');
    const [conversionResult, setConversionResult] = useState(null);

    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD'];

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://api.api-ninjas.com/v1/convertcurrency?want=${wantCurrency}&have=${haveCurrency}&amount=${amount}`,
                {
                    headers: {
                        "X-Api-Key": "kzOrF3CbOoNwkrP7cmvrDA==wSPWNvXpvJ4MRsdd",
                    },
                }
            );
            if (response.data) {
                setConversionResult(response.data);
                console.log(response.data);
            } else {
                setConversionResult(null);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchData();
    };

    return (
        <>
       <Header/>
        <div className="currency-container">
            <h1>Currency Converter</h1>
            <form onSubmit={handleSubmit} className="currency-form">
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="field"
                />
                <label htmlFor="wantCurrency">Want Currency:</label>
                <select
                    id="wantCurrency"
                    value={wantCurrency}
                    onChange={(e) => setWantCurrency(e.target.value)}
                    className="field"
                >
                    <option value="">-- Please select a currency --</option>
                    {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <label htmlFor="haveCurrency">Have Currency:</label>
                <select
                    id="haveCurrency"
                    value={haveCurrency}
                    onChange={(e) => setHaveCurrency(e.target.value)}
                    className="field"
                >
                    <option value="">-- Please select a currency --</option>
                    {currencies.map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <button type="submit" className="convert-btn">Convert</button>
            </form>
            {conversionResult && (
                <div className="results-container">
                    <p>Converted Currency: {conversionResult.new_currency}</p>
                    <p>Converted Amount: {conversionResult.new_amount}</p>
                </div>
            )}
        </div>
        </>
    );
}
