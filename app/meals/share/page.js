import ImagePicker from "@/components/meals/image-picker";
import styles from "./styles.module.css";

const MealsSharePage = () => {
  const shareMeal = async (formData) => {
    "use server";

    const meal = {
      title: formData.get("title"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
      summary: formData.get("summary"),
      instruction: formData.get("instruction"),
      image: formData.get("image"),
    };

    console.log("Single Meal ========>", meal)
  };
  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={styles.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;
