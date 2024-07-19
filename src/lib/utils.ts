import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = ( number : number ) => {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}