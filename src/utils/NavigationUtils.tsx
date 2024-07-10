export const getNextStep = (currentStep: number, totalSteps: number): number => {
    return Math.min(currentStep + 1, totalSteps - 1);
  };
  
  export const getPrevStep = (currentStep: number): number => {
    return Math.max(currentStep - 1, 0);
  };