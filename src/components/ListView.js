import React from "react";
import countyData from "../assets/countyData.json";
import FastFacts from "./FastFacts";
export default function ListView() {
  return (
    <>
      <div className="list-wrapper">
        {countyData.map((county, index) => (
          <div
            className={index % 2 === 0 ? "list-item dark" : "list-item light"}
            key={index}
          >
            <FastFacts county={county} />
          </div>
        ))}
      </div>
    </>
  );
}
