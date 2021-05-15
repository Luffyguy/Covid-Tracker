import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const covidData = await res.json();
      console.log(covidData.statewise[0]);
      setData(covidData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section>
        <h3>Latest data</h3>
        <h2>Covid Tracker</h2>

        <ul>
          <li>
            <div>
              <p> Country India </p>
            </div>
          </li>
          <li>
            <div>
              <p> Total Confirmed </p>
              <p>{data.confirmed}</p>
            </div>
          </li>
          <li>
            <div>
              <p> Total Active </p>
              <p>{data.active}</p>
            </div>
          </li>
          <li>
            <div>
              <p> Total Recovered </p>
              <p>{data.recovered}</p>
            </div>
          </li>
          <li>
            <div>
              <p> Total Deaths </p>
              <p>{data.deaths}</p>
            </div>
          </li>
          <li>
            <div>
              <p> Last Updated </p>
              <p>{data.lastupdatedtime}</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
