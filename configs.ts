const DEFAULT_BASE_URL = "http://localhost:3000";
const baseUrl = process.env.BASE_URL || DEFAULT_BASE_URL;
const configs = {
  baseUrl,
  apiBaseUrl: "https://rickandmortyapi.com/graphql",
  emptyImage: `${baseUrl}/assets/images/rick.jpeg`,
  defaultPage: 1,
  timeout: 3000,
};

export default configs;
