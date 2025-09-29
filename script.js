async function fetchData() {
  try {
    // Replace with your API or scraping logic
    let result = Math.floor(Math.random() * 10); // simulate result 0-9
    let prediction = result >= 5 ? "BIG" : "SMALL";

    // Simulate period & timer
    let period = "20250927100010909";
    let timer = "00:55";

    // Update overlay
    document.getElementById("period").innerText = "Period: " + period;
    document.getElementById("timer").innerText = "Timer: " + timer;
    document.getElementById("prediction").innerText = "Prediction: " + prediction;

  } catch (e) {
    console.error("Error fetching data:", e);
  }
}

// Update every 5 seconds
setInterval(fetchData, 5000);
fetchData();
