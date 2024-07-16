import { useOnboarding } from "../context/OnboardingContext";

const Confirmation = () => {
  const { preferences } = useOnboarding();
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6">
      <h1 className="text-4xl font-bold text-yellow-900">Beer Wizard Summary</h1>
      <p className="text-lg text-gray-700">Review your beer choices below:</p>
      <div className="grid grid-cols-3 gap-4">
        {preferences.map((beerPref) => (
          <label
            key={beerPref.name}
            className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={beerPref.img}
              alt={beerPref.name}
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
            <span className="text-sm font-semibold text-gray-700">
              {beerPref.name}
            </span>
          </label>
        ))}
      </div>
      <p className="text-lg text-gray-700">
        Thank you for completing our beer wizard!
      </p>
      <p className="text-gray-700">
        We hope you enjoyed the experience.
      </p>
    </div>
  );
};

export default Confirmation;
