import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const data = await fetchUserData({ username, location, minRepos, page });
      if (data.items.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers((prevUsers) => [...prevUsers, ...data.items]);
        setHasMore(data.total_count > users.length + data.items.length);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    }
    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username) {
      setUsers([]); // Reset users for a new search
      setPage(1); // Reset page for a new search
      handleSearch();
    }
  }

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
    handleSearch();
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering for loading, error, and success */}
      {loading && <h1>Loading...</h1>}

      {error && <h1>{error}</h1>}

      {!loading && !error && users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold">{user.login}</h2>
                <p>Location: {user.location || "N/A"}</p>
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* "Load More" button for pagination */}
      {hasMore && (
        <button
          onClick={loadMore}
          className="bg-gray-300 text-black p-2 w-full rounded mt-4 hover:bg-gray-400"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
