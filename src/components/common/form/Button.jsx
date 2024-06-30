import { twMerge } from "tailwind-merge";

export const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className={twMerge(
        "bg-secondary-200 hover:bg-secondary-300 hover:cursor-pointer px-6 py-3 rounded-lg text-white text-lg  w-full",
        disabled &&
          "bg-secondary-200/70 hover:bg-secondary-200/70 hover:cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
