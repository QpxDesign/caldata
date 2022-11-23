import React, { useState } from "react";
import countyDataSource from "../assets/countyData.json";
import FastFacts from "./FastFacts";
import { AiOutlineUnorderedList, AiFillCloseCircle } from "react-icons/ai";
import ListView from "./ListView";

export default function Map() {
  const [countyData, setcountyData] = useState(countyDataSource[0]);
  const [showList, setShowList] = useState(false);
  return (
    <>
      <button className="toggle-list" onClick={() => setShowList(true)}>
        <AiOutlineUnorderedList />
      </button>

      {showList ? (
        <>
          <ListView />
          <AiFillCloseCircle
            role="button"
            className="quit-button"
            onClick={() => setShowList(false)}
          />
        </>
      ) : null}
      <div className="map-wrapper" onClick={() => setShowList(false)}>
        <svg
          className="map"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 620.843 733.026"
        >
          {countyDataSource.map((county, index) => (
            <path
              key={index}
              d={county.path}
              stroke="#fff"
              role="button"
              className={
                county.name === countyData.name ? "county active" : "county"
              }
              onMouseOver={() => {
                if (countyData.name === "") {
                  setcountyData(county);
                }
              }}
              onClick={() => {
                setcountyData(county);
              }}
            />
          ))}
        </svg>
        <div className="fast-facts-wrapper">
          <FastFacts county={countyData} />
        </div>
      </div>
    </>
  );
}
