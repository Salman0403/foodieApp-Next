"use server";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instruction: formData.get("instruction"),
    image: formData.get("image"),
  };

  console.log("Single Meal ========>", meal);
};
