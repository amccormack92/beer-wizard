export const fetchRandomBrewery = async () => {
  const response = await fetch('https://api.openbrewerydb.org/v1/breweries/random');
  if (!response.ok) {
    throw new Error('Failed to fetch random brewery');
  }
  const data = await response.json();
  return data[0];
};
