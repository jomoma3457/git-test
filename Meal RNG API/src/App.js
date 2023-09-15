import "./styles.css";
import Food from "./Meal";

export default function Meals() {
  return (
    <>
      <div className="container">
        <h1>Hungry?</h1>
        <div className="underline"></div>
        <Food />
      </div>
    </>
  );
}
