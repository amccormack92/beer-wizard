import React from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  label: string;
  type?: 'primary' | 'secondary';
}

const NavigationButton = ({ onClick, label, type = 'primary' }: NavigationButtonProps) => {
  const baseClasses = 'mt-4 px-6 py-3 rounded-lg shadow-md transition duration-300';
  const primaryClasses = 'bg-yellow-600 text-white hover:bg-yellow-700';
  const secondaryClasses = 'bg-gray-300 text-gray-700 hover:bg-gray-400';

  const buttonClasses = `${baseClasses} ${type === 'primary' ? primaryClasses : secondaryClasses}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default NavigationButton;