import React, { useEffect } from "react";

const Covid = () => {
  const getData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      console.log(res);
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
      </section>
    </>
  );
};

export default Covid;
