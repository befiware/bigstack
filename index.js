const welcomeMessage = () => {
  return "Welcome to BigStack! Embrace the hardware and software journey. 💪";
};

const getRandomStackAdvice = () => {
  const adviceList = [
    "Hardware without software is just metal.",
    "Think of the whole system, not just the code.",
    "Connect the world, one device at a time.",
    "Optimize for efficiency, but plan for scale.",
    "Keep the user in mind for every decision.",
  ];
  return adviceList[Math.floor(Math.random() * adviceList.length)];
};

// Simulate getting a random sensor reading (e.g., for temperature or humidity)
const getMockSensorData = () => {
  return {
    temperature: (Math.random() * 30 + 15).toFixed(2) + " °C",
    humidity: (Math.random() * 50 + 30).toFixed(2) + " %",
  };
};

// Generate a mock status for a BigStack IoT device
const getDeviceStatus = () => {
  const statuses = ["online", "offline", "updating", "error"];
  return {
    deviceId: `device_${Math.floor(Math.random() * 1000)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    lastChecked: new Date().toISOString(),
  };
};

module.exports = {
  welcomeMessage,
  getRandomStackAdvice,
  getMockSensorData,
  getDeviceStatus,
};
