"use server";

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  console.log("Single Meal ========>", meal);
  await saveMeal(meal);
  redirect("/meals");
};
