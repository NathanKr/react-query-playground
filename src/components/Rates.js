import React from "react";
import { useQuery } from "react-query";

const Rates = () => {
  const queryKey = "latestRate";
  const latestRateQueryHandler = async () => {
    const response = await fetch("https://api.ratesapi.io/api/latest");
    const data = await response.json();
    return data;
  };
  const { status, data, error } = useQuery(queryKey, latestRateQueryHandler);

  console.log(`status : ${status}`);
  console.log(`data : ${JSON.stringify(data)}`);
  console.log(`error : ${error}`);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return <div>1 EUR is {data.rates.USD} USD</div>;
};

export default Rates;
