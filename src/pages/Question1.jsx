import React from "react";

import data from "../components/Question1/Data.json";

const Order = data.Order.sort((a, b) => (a.name > b.name ? 1 : -1));

export default function Question1() {
  return (
    <div>
      {Order.map((data, index) => (
        <div key={index} className="d-flex">
          {data.name.charAt(0).toUpperCase() + data.name.slice(1)} want to buy
          &nbsp;
          {data.cars.map((car, i) => (
            <>
              {data.cars.length - 1 === i ? <p>{car}</p> : <p>{car},&nbsp;</p>}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
