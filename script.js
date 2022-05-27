import chartData from "./data.json" assert { type: "json" };

//basically here im trying to extract the data from provided json file
let days = [];
let amounts = [];
function extractedData() {
  chartData.map((eachData) => {
    days.push(eachData.day);
    amounts.push(eachData.amount);
  });
}

extractedData();

const d = new Date("July 21, 1983 01:15:00");
let today = d.getDay() - 1;

// this is the data for the chart itself
const labels = days;

let bgColor = [];
let bgColorHover = [];

for (let i = 0; i < days.length; i++) {
  if (i === today) {
    bgColor[i] = "hsl(186, 34%, 60%)";
    bgColorHover[i] = "hsl(187, 49%, 80%)";
  } else {
    bgColor[i] = "hsl(10, 79%, 65%)";
    bgColorHover[i] = "hsl(10, 100%, 76%)";
  }
}

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: bgColor,
      borderColor: "rgba(0,0,0)",
      data: amounts,
      borderWidth: 0,
      borderRadius: 5,
      hoverBackgroundColor: bgColorHover,
      stack: "hi",
      borderSkipped: false,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    interaction: {
      mode: "point",
    },
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
    },

    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          title: function (value) {},
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
