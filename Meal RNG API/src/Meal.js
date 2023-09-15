import React from "react";
import { useState, useEffect } from "react";

//const url = "./www.themealdb.com/api/json/v1/1/random.php"

const Food = () => {
  const [meal, setMeal] = useState([]);

  const fetchMeal = async () => {
    const response = await fetch(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log(data.meals);
    setMeal(data.meals);
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  const getIngredients = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    return ingredients;
  };

  return (
    <>
      <div className="button">
        <button onClick={() => fetchMeal()} className="btn">
          Get Meal ?
        </button>
      </div>
      <section className="meals">
        {meal.map((f) => {
          const {
            idMeal,
            strMeal,
            strInstructions,
            strMealThumb,
            strYoutube
          } = f;

          return (
            <article key={idMeal}>
              <div>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>

              <div>
                <h3>How to Prepare:</h3>
                <div className="underline"></div>
                <p>{strInstructions}</p>
              </div>
              <div className="ingredient">
                <h4>Ingredients: </h4>
                <div className="underline"></div>
                <ul>
                  {getIngredients(f).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="row">
                <h5>Video Recipe</h5>
                <div className="underline"></div>
                <div className="videoWrapper">
                  <iframe
                    width="500"
                    height="400"
                    src={`https://www.youtube.com/embed/${strYoutube.slice(
                      -11
                    )}`}
                    title="a youtube video for cooking"
                  ></iframe>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Food;
