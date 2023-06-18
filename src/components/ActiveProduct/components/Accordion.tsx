import React from "react";

interface AcordionType {
  buttonLabel: string;
  children: React.ReactNode;
  onClick: () => void;
  active: boolean;
}

const Accordion: React.FC<AcordionType> = ({
  active,
  buttonLabel,
  children,
  onClick,
}) => {
  return (
    <div className="border-y border-y-app-gray-shade p-2">
      <button
        className={`${
          active ? "active" : "inactive"
        } acordion-btn__animated-icon capitalize font-bold w-full text-start`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
      {children}
    </div>
  );
};

export default Accordion;
