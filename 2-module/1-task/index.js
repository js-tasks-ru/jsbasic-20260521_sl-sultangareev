function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let value = salaries[key];

    console.log(value + " - " + typeof value + " - " + !!value + " - " + Number.isFinite(value));

    if (Number.isFinite(value)) {
      sum += value;
    }
  }

  return sum
}