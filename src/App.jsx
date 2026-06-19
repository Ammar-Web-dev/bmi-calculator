import { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState(0);

  function calculatebmi(e) {
    e.preventDefault();

    const bmiValue = weight / ((height / 100) * (height / 100));

    let category = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue < 25) {
      category = "Normal weight";
    } else if (bmiValue < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    setBmi(bmiValue.toFixed(2));
    setCategory(category);  }

  return (
    <div>
      <h1>BMI Calculator</h1>

      <form onSubmit={calculatebmi}>
        <input
          type="number"
          placeholder="Enter weight"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter height (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>BMI:{bmi}</h2>
      <h2>Category: {category}</h2>
    </div>
  );
}

export default App;
