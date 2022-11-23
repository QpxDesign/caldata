import React from "react";
import { BsPeopleFill, BsThermometerHalf } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { GiPoliceBadge } from "react-icons/gi";
import { SiRainmeter } from "react-icons/si";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export default function FastFacts(props) {
  function formatPopulation(pop) {
    if (pop < 1000000) {
      return parseFloat(pop * 0.001).toFixed(2) + "k";
    }
    return parseFloat(pop * 0.000001).toFixed(2) + "mil";
  }
  return (
    <>
      <h1>{props.county.name + " County"}</h1>
      <div className="fact-wrapper">
        <BsPeopleFill color="#9ca3af" />
        <h2>{formatPopulation(props.county.population)}</h2>
      </div>
      <div className="fact-wrapper">
        <RiMoneyDollarCircleFill color="#4ade80" className="icon" />
        <h2>
          gdp (per capita): $
          {Math.round(
            props.county.gdp / props.county.population
          ).toLocaleString("en-us")}{" "}
        </h2>{" "}
      </div>

      <div className="fact-wrapper">
        <VscGraphLine color="#27272a" className="icon" />
        <h2>
          {parseFloat(props.county.percentInPoverty * 100).toFixed(1)}% of pop.
          below poverty line
        </h2>{" "}
      </div>

      <div className="fact-wrapper">
        <GiPoliceBadge color="#eab308" className="icon" />
        <h2>
          Crime Score:{" "}
          {parseFloat(
            (props.county.totalCrimes / props.county.population) * 1000
          ).toFixed(1)}
        </h2>{" "}
      </div>

      <div className="fact-wrapper inline">
        <div className="fact-wrapper">
          <BsThermometerHalf color="#c7d2fe" className="icon" />
          <h2
            style={{
              fontWeight: 700,
              color: "#b91c1c",
              display: "inline-block",
            }}
          >
            {props.county.climate.toLowerCase()}
          </h2>
        </div>
      </div>
    </>
  );
}
