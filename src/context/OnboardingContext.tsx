import { createContext, useContext, useState } from "react";
import { getNextStep, getPrevStep } from "../utils/NavigationUtils";

interface OnboardingContextProps {
  step: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  preferences: string[];
  handleSetPreferences: (preferences: string) => void;
}

export const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export const OnboardingProvider = ({ children, totalSteps }) => {
    const [step, setStep] = useState(0);
    const [preferences, setPreferences] = useState<string[]>([]);

    const handleNextStep = () => setStep((prevStep) => getNextStep(prevStep, totalSteps));
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
        handlePrevStep, preferences, handleSetPreferences }}>
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
