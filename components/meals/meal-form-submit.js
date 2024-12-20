"use client";

import { useFormState } from "react-dom";

export const MealFormSubmit = () => {
  const { pending } = useFormState();

  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
};
