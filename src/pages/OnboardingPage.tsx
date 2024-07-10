import BeerPreferences from '../components/BeerPreferences';
import Confirmation from '../components/Confirmation';
import OnBoardingComponent from '../components/OnBoardingComponent';
import RandomBeer from '../components/RandomBeer';
import Welcome from '../components/Welcome';
import { OnboardingProvider } from '../context/OnboardingContext';

const steps = [
    { title: 'Welcome', component: <Welcome /> },
    { title: 'Beer Preferences', component: <BeerPreferences /> },
    { title: 'Random Beer Suggestion', component: <RandomBeer /> },
    { title: 'Confirmation', component: <Confirmation /> },
  ];
const OnboardingPage = () => {
    return (
        <OnboardingProvider totalSteps={steps.length}>
          <div className="p-6 max-w-lg w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
            <OnBoardingComponent steps={steps} />
          </div>
        </OnboardingProvider>
      );
}

export default OnboardingPage
