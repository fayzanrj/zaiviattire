// CheckoutSteps.tsx
import COLORS from "@/constants/COLORS";
import StepProps from "@/props/CheckoutStepProps";
import React from "react";
import { MdOutlineDone } from "react-icons/md";

interface CheckoutStepsProps {
  steps: StepProps[];
  currentStep: number;
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <ul className="mt-6 text-center h-fit">
      {steps.map((step: StepProps) => (
        <li
          className="inline-block mx-0.5 md:mx-3 lg:mx-6 w-[22%] md:w-40  align-top"
          key={step.stepNumber}
        >
          <button
            className={`w-8 h-8 md:w-12 md:h-12 md:text-xl rounded-full border relative ${
              step.isCompleted
                ? "bg-[#2fcb82] border-[#2fcb82]"
                : currentStep + 1 === step.stepNumber
                ? "bg-gray-400"
                : "bg-transparent"
            }`}
          >
            {step.isCompleted ? (
              <MdOutlineDone
                color={"#ffffff"}
                className="absolute text-lg font-extrabold md:text-2xl CENTER"
              />
            ) : (
              <p style={{ fontFamily: "sans-serif" }}>{step.stepNumber}</p>
            )}
          </button>
          <p className="mt-1 text-sm font-semibold">{step.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutSteps;
