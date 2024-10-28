import React, { useState, useEffect } from "react";
import { PiCoin } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import { PiChartLineFill } from "react-icons/pi";
import { HiBellAlert } from "react-icons/hi2";

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="text-center text-white mb-8">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Xe Currency Convert
        </h1>
        <h3 className="text-base font-normal md:text-xl">
          Check live foreign currency exchange rates
        </h3>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-6xl w-full md:p-8">
        <div className="flex justify-around mb-6 border p-2 rounded-full">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300">
            <PiCoin />
            <span>Convert</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-gray-200">
            <BsFillSendFill />
            <span>Send</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-gray-200">
            <PiChartLineFill />
            <span>Charts</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-gray-800 hover:bg-gray-200">
            <HiBellAlert />
            <span>Alerts</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-500">Amount</label>
            <input
              type="number"
              placeholder="£1,000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-500">From</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value=""> Currency</option>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-500">To</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
              <option value=""> Currency</option>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-lg bg-blue-500 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-600">
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
