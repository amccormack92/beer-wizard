import { useQuery } from '@tanstack/react-query';
import { fetchRandomBrewery } from '../utils/apiUtils';

const PromoBrewery = () => {
  const { data: brewery, error, isLoading } = useQuery({queryKey: ['randomBrewery'], queryFn:fetchRandomBrewery});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Failed to load brewery promo</div>;
  }

  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold text-yellow-900">Try Our Partner Brewery Today!</h2>
      <h4 className="text-2xl font-bold mb-2">{brewery.name}</h4>
      <p className="text-lg text-gray-700">{brewery.brewery_type}</p>
      <p className="text-gray-700">{brewery.street}, {brewery.city}, {brewery.state}</p>
      <p className="text-sm text-gray-500 mt-2">{brewery.country}</p>
      <a href={brewery.website_url} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
        Visit Website
      </a>
    </div>
  );
};

export default PromoBrewery;
