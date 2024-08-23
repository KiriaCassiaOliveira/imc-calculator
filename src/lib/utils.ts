import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formateNumber(num: number, digits: number = 2) {
  return num.toLocaleString("pt-BR", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}
