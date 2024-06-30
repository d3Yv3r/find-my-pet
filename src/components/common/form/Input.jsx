import { twMerge } from "tailwind-merge";

export const Input = ({ type, name, value, disabled, inputClass }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className={twMerge(
          "border border-secondary-200 rounded p-3",
          inputClass
        )}
      />
    </>
  );
};
