import { useQuery } from "@tanstack/react-query";

const Posts = () => {
  const queryKey = ["latestPosts"];
  const latestPostsQueryHandler = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };
  const { isPending, error, data } = useQuery({
    queryKey,
    queryFn: latestPostsQueryHandler,
  });


  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <div>post length {data.length}</div>;
};

export default Posts;
