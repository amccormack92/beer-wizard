import { useOnboarding } from '../context/OnboardingContext';

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
        <button onClick={handleNextStep} className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">
        Start Your Journey
        </button>
    </div> : 
     <div className="flex justify-between">
     {step > 0 && <button  onClick={handlePrevStep} className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">Back</button>}
     {step < steps.length - 1 && <button onClick={handleNextStep} className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">Next</button>}
   </div>
   }
  </>
  )
}

export default OnBoardingComponent
