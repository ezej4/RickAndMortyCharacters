const DEFAULT_BASE_URL = 'http://localhost:3000';
const baseUrl = process.env.NEXT_PUBLIC_HOST || DEFAULT_BASE_URL;

const configs = {
  baseUrl,
  apiBaseUrl: 'https://rickandmortyapi.com/graphql',
  emptyImage: `${baseUrl}/assets/images/rick.jpg`,
  logoIcon: `${baseUrl}/assets/images/logo.png`,
  defaultPage: 1,
  timeout: 15000,
};

export default configs;
