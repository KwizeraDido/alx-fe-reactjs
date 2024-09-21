import axios from "axios";

export async function fetchUserData({ username, location, minRepos }) {
  try {
    let query = `${username ? `user:${username}` : ""}`;
    if (location) {
      query += ` location:${location}`;
    }
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;  // `items` contains the list of users
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];  // Return an empty array in case of error
  }
}
