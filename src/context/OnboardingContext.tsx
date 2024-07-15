import { createContext, useContext, useState } from "react";
import { getNextStep, getPrevStep } from "../utils/NavigationUtils";
import * as yup from 'yup';

interface OnboardingContextProps {
  step: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  preferences: string[];
  handleSetPreferences: (preferences: string) => void;
  error: string | null;
}

export const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export const OnboardingProvider = ({ children, totalSteps }) => {
    const [step, setStep] = useState(0);
    const [preferences, setPreferences] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleNextStep = async () => {
      if (step === 1) { // Assuming step 1 is the Beer Preferences step
        const schema = yup.array().min(1, 'Please select at least one beer type');
        try {
          await schema.validate(preferences);
          setError(null); // Clear any previous error
          setStep((prevStep) => getNextStep(prevStep, totalSteps));
        } catch (validationError) {
          setError(validationError.message); // Set the error message
        }
      } else {
        setError(null); // Clear any previous error
        setStep((prevStep) => getNextStep(prevStep, totalSteps));
      }
    };
  const handlePrevStep = () => setStep((prevStep) => getPrevStep(prevStep));
  

    const handleSetPreferences = (preference: string) => {
      setPreferences((prev) =>
        prev.includes(preference)
          ? prev.filter((pref) => pref !== preference)
          : [...prev, preference]
      );

    }
  
    return (
      <OnboardingContext.Provider value={{ step, handleNextStep,
        handlePrevStep, preferences, handleSetPreferences, error }}>
        {children}
      </OnboardingContext.Provider>
    );
  };

  export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
