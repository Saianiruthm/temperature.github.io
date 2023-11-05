function convertTemperature() {
  // Get the temperature in Celsius from the input field.
  var celsius = parseFloat(document.getElementById("celsius").value);

  // Convert the temperature to Fahrenheit.
  var fahrenheit = (celsius * 9 / 5) + 32;

  // Convert the temperature to Kelvin.
  var kelvin = celsius + 273.15;

  // Set the Fahrenheit and Kelvin input fields to the converted temperatures.
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("kelvin").value = kelvin.toFixed(2);
}
