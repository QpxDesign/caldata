import "./Caldata.css";
import Header from "./components/Header";
import React from "react";

export default function About() {
  return (
    <div className="App">
      <Header />
      <div className="c-wrapper">
        <h1 className="c">About</h1>
        <p className="c">
          visualize dozens of statistics about the golden state's 58 counties.
          learn about wealth distribution, climate data, and more, in a fully
          accessible clean and modern layout. our data is sourced directly from
          the Californian Goverment, with climate data provided by scott
          pinkelman's climateapi. Geocoding and decoding are done through
          MapQuest.
        </p>
      </div>
    </div>
  );
}
