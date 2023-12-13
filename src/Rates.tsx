import { useQuery } from "react-query";

const Rates = () => {
  const queryKey = "latestRate";
  const latestRateQueryHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  const { status, data, error } = useQuery(queryKey, latestRateQueryHandler);

  console.log(`status : ${status}`);
  console.log(data);
  console.log(`error : ${error}`);

  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return <div>post length {data.length}</div>;
};

export default Rates;
