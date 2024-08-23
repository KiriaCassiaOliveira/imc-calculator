import { InputHTMLAttributes } from "react";

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="block w-full border border-rose-400 rounded p-3"
      {...props}
    />
  );
}

export default Input;
