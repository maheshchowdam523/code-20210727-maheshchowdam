const calculateBMI = (weight, height) => {
  const bmi = Number(weight / (height * height)).toFixed(1);
  return bmi <= 18.4
    ? "Underweight"
    : bmi <= 25
    ? "Normal weight"
    : bmi <= 30
    ? "Overweight"
    : bmi <= 35
    ? "obese"
    : bmi <= 40
    ? "Severely obese"
    : "Very severely obese";
};

module.exports = {
  calculateBMI
};
