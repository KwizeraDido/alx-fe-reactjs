import { useQuery } from "react-query";

const fetchData = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!resp.ok) {
    throw new Error('Network response was not ok');
  }
  return resp.json();
}

const PostsComponent = () => {

  const { data, isError, error, isLoading, refetch } = useQuery('fetchPosts', fetchData, {

    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });


  if (isLoading) {
    return <div>Loading....</div>
  }


  if (isError) {
    return <div>Error loading data: {error.message}</div>
  }


  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;S