// dashboard.js
const streamflow = require('streamflow');
const pyth = require('pyth');

// Displays passive income and real-time price tracking
async function displayDashboard() {
  const incomeData = await streamflow.getIncomeData();
  const priceData = await pyth.getPrice('SOL');

  document.getElementById('incomeData').innerText = `Income: ${incomeData.total}`;
  document.getElementById('priceData').innerText = `Current Price of SOL: ${priceData}`;
}

setInterval(displayDashboard, 10000); // Update every 10 seconds