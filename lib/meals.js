import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // just to delay response

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}
