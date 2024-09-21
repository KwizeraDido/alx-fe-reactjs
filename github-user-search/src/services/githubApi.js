import axios from 'axios';

// Set up the base URL for the GitHub API
const API_BASE_URL = 'https://api.github.com';

// Get your API key from environment variables
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

// Create a function to fetch GitHub user details
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}` // Pass the API key in the request header
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
