
const components = [
  {
    "name": "DC Motor (Rotary)",
    "voltage": "6V - 12V",
    "description": "A motor that converts electrical energy into mechanical motion, often used in robotics and automation.",
    "range": "0 to 360 degrees (continuous rotation)",
    "application": "Robotics, conveyor belts, fans"
  },
  {
    "name": "Servo Motor (Position Control)",
    "voltage": "4.8V - 6V",
    "description": "A motor that provides precise control of angular position, ideal for applications requiring specific positioning.",
    "range": "0 to 180 degrees",
    "application": "Robotics"
  },
  {
    "name": "Water Pump (Submersible)",
    "voltage": "5V - 12V",
    "description": "A device designed to move water, commonly used in irrigation systems and aquariums.",
    "range": "Pumps water at a rate of 120-300 liters per hour",
    "application": "Water features"
  },
  {
    "name": "Photoresistor (Light Sensor)",
    "voltage": "5V",
    "description": "A light-sensitive resistor that changes resistance based on light intensity, useful for light detection.",
    "range": "Detects light levels from 0 to 1000 lux",
    "application": "Ambient light sensing, automatic lighting systems"
  },
  {
    "name": "Ultrasonic Sensor (Distance Measuring)",
    "voltage": "5V",
    "description": "A sensor that measures distance by emitting ultrasonic waves and measuring their reflection time.",
    "range": "0.8 inches to 13.1 feet",
    "application": "Obstacle avoidance in robotics, distance measurement"
  }
];

// showlist of components
function displayAllComponents() {
  const componentList = document.getElementById("componentList");
  componentList.innerHTML = components.map(component => `
    <div class="component">
      <h3>${component.name}</h3>
      <p><strong>Voltage:</strong> ${component.voltage}</p>
      <p><strong>Description:</strong> ${component.description}</p>
      <p><strong>Range:</strong> ${component.range}</p>
      <p><strong>Application:</strong> ${component.application}</p>
    </div>
  `).join("");
}

// display on page load
displayAllComponents();

//make component disappear or show when click on header
document.querySelector("header").addEventListener("click", () => {
  const componentList = document.getElementById("componentList");
  componentList.style.display = componentList.style.display === "none" ? "block" : "none"; //check if its none, if is make it appear, if not make it disappear
});