import { ONE_IN_TO_CM } from "./globals";

export const convertToCentimeters = (element: number) => {
  return Math.round(element * ONE_IN_TO_CM);
};
