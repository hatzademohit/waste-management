// Vehicle Deployment Status
new Chart(document.getElementById("vehicleStatusChart"), {
  type: "doughnut",
  data: {
    labels: ["On Route", "Off Route"],
    datasets: [
      {
        data: [155, 48],
        backgroundColor: ["#10B981", "#EF4444"],
      },
    ],
  },
});

// Hourly Progress Chart
new Chart(document.getElementById("hourlyProgressChart"), {
  type: "line",
  data: {
    labels: ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "9 PM"],
    datasets: [
      {
        label: "Progress %",
        data: [5, 10, 25, 45, 65, 85, 95, 100],
        borderColor: "#3B82F6",
        fill: false,
      },
    ],
  },
  options: { scales: { 
        x: { title: { display: true,text: 'Time', font: { size: 14 } }, }, 
        y: { title: { display: true, text: 'Waste Collection Progress %', font: { size: 14 } } } 
    }},
});

// Section-wise Vehicle Status
new Chart(document.getElementById("sectionVehicleChart"), {
  type: "bar",
  data: {
    labels: [
      "Greenhill",
      "Lakeside",
      "Hilltop",
      "Riverbend",
      "Central Park",
      "Bayview",
      "Market District",
      "Sunset Ridge",
    ],
    datasets: [
      {
        label: "Vehicles",
        data: [12, 8, 15, 10, 22, 18, 20, 12],
        backgroundColor: "#F59E0B",
      },
    ],
  },
  options: { scales: { 
        x: { title: { display: true,text: 'Location', font: { size: 14 } }, }, 
        y: { title: { display: true, text: 'Vehicals', font: { size: 14 } } } 
    }},
});

// Waste Coverage
new Chart(document.getElementById("wasteCoverageChart"), {
  type: "bar",
  data: {
    labels: [
      "Greenhill",
      "Lakeside",
      "Hilltop",
      "Riverbend",
      "Central Park",
      "Bayview",
      "Market District",
      "Sunset Ridge",
    ],
    datasets: [
      {
        label: "Wet Waste %",
        data: [75, 50, 80, 65, 85, 70, 90, 60],
        backgroundColor: "#10B981",
      },
      {
        label: "Dry Waste %",
        data: [60, 40, 70, 55, 75, 65, 85, 50],
        backgroundColor: "#3B82F6",
      },
    ],
  },
  options: { scales: { 
        x: { stacked: true, title: { display: true,text: 'Locations', font: { size: 14 } }, }, 
        y: { stacked: true, title: { display: true, text: 'Waste Count', font: { size: 14 } } } 
    }},
});

// Dumping Ground Visits
new Chart(document.getElementById("dumpingVisitsChart"), {
  type: "bar",
  data: {
    labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM"],
    datasets: [
      {
        label: "Visits",
        data: [1, 10, 25, 15, 5],
        backgroundColor: "#8B5CF6",
      },
    ],
  },
  options: { scales: { 
        x: { title: { display: true,text: 'Time of Visit', font: { size: 14 } }, }, 
        y: { title: { display: true, text: 'Number of Visits', font: { size: 14 } } } 
    }},
});

// Vehicle Timing Status
new Chart(document.getElementById("timingStatusChart"), {
  type: "bar",
  data: {
    labels: [
      "Greenhill",
      "Lakeside",
      "Hilltop",
      "Riverbend",
      "Central Park",
      "Bayview",
      "Market District",
      "Sunset Ridge",
    ],
    datasets: [
      {
        label: "On Time",
        data: [10, 6, 12, 8, 20, 14, 18, 10],
        backgroundColor: "#10B981",
      },
      {
        label: "Late",
        data: [2, 2, 3, 2, 2, 4, 2, 2],
        backgroundColor: "#EF4444",
      },
    ],
  },
  options: { scales: { 
        x: { stacked: true, title: { display: true,text: 'Locations', font: { size: 14 } }, }, 
        y: { stacked: true, title: { display: true, text: 'Running Count', font: { size: 14 } } } 
    }},
});

// toggle button script
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// theme toggle script
const toggleSwitch = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
  themeLabel.textContent = toggleSwitch.checked ? "Light Mode" : "Dark Mode";
});
