import { useOnboarding } from '../context/OnboardingContext';
import NavigationButton from './ui-components/NavigationButton';

interface OnBoardingComponentProps {
    steps: {title: string, component: JSX.Element}[]
}
const OnBoardingComponent = ({steps}: OnBoardingComponentProps) => {
    const { step, handleNextStep, handlePrevStep } = useOnboarding();

  return (
    <>
    {steps[step].component}
    {step === 0 ?  
     <div className="flex flex-col items-center text-center space-y-6 p-6">
        <NavigationButton onClick={handleNextStep} label="Start Your Journey" />
    </div> : 
     <div className="flex justify-between">
      {step > 0 && (
            <NavigationButton onClick={handlePrevStep} label="Back" />
        )}
        {step < steps.length - 1 && (
            <NavigationButton onClick={handleNextStep} label="Next" />
        )}</div>
   }
  </>
  )
}

export default OnBoardingComponent
