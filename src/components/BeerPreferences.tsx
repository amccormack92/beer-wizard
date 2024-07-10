import { ChangeEvent } from "react";
import { useOnboarding } from "../context/OnboardingContext";

const beerTypes = [
  { name: "Lager", imgSrc: "https://www.checkyourfood.com/content/blob/Ingredients/Lager-beer-nutritional-information-calories.jpg" },
  { name: "Pilsner", imgSrc: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/171248/171248_00_2x.jpg?20190514035612" },
  { name: "IPA", imgSrc: "https://smallbatchbrew.com.au/wp-content/uploads/2017/11/SmallBatchBrew-CitraWarrior-IPA-300x400.jpg" },
  { name: "Stout", imgSrc: "https://www.liquor.com/thmb/g8j81x1BLqWicFenwikKnVWbtQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-910481830-3c75cb0cfadb4e868961a02e748c2b27.jpg" },
  { name: "Hazy IPA", imgSrc: "https://getollie.com/wp-content/uploads/2023/04/cerebral-brewing-hazy-ipa-800x534-1.jpg" },
  { name: "Ale", imgSrc: "https://cdn.shopify.com/s/files/1/2400/0975/files/Irish-red-ale3_2048x.jpg" },
];

const BeerPreferences = () => {
  const { preferences, handleSetPreferences } = useOnboarding();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSetPreferences(value);
  };

  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6">
      <h1 className="text-4xl font-bold text-yellow-900">
        Your Beer Preferences
      </h1>
      <p className="text-lg text-gray-700">
        Select the types of beer you enjoy:
      </p>
      <div className="grid grid-cols-3 gap-4">
      {beerTypes.map((type) => (
           <label key={type.name} className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
           <img src={type.imgSrc} alt={type.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
           <input
             type="checkbox"
             value={type.name}
             checked={preferences.includes(type.name)}
             onChange={handleCheckboxChange}
             className="form-checkbox accent-yellow-500 text-yellow-600 rounded focus:ring-yellow-500 transition duration-300"
           />
           <span className="text-sm font-semibold text-gray-700">{type.name}</span>
         
         </label>
        ))}
      </div>
    </div>
  );
};

export default BeerPreferences;
