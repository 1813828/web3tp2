import Chart from "https://esm.sh/chart.js/auto";
import "https://esm.sh/chartjs-adapter-date-fns";

const data = [];

// Ici on ajoute des données bidons dans le tableau
for (let i = 0; i < 10; i++) {
  data.push({
    x: i * 1000 + 1000,
    y: Math.floor(Math.random() * 2000),
  });
}

let graphique = new Chart(document.querySelector("canvas").getContext("2d"), {
  type: "line",
  data: {
    datasets: [
      {
        label: "-",
        data: data,
        borderWidth: 2,
        tension: 0.3, // 0 linéaire, 0.5 smooth
        fill: true,
        borderColor: "rgba(239, 85, 82, 1)",
        backgroundColor: "rgba(239, 85, 82, 0)",
        pointRadius: 0,
      },
    ],
  },
  options: {
    animation: {
      duration: 10000, // 20x plus lent que la modification
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: { display: false },
    },
    scales: {
      x: {
        type: "linear",
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },

      y: {
        type: "linear",
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          maxTicksLimit: 3,
        },
      },
    },
  },
});

// En événement
document.body.addEventListener("click", () => {
  for (const ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i].y = Math.round(Math.random() * 2000);
    }
  }
  graphique.update();
});

// En temps
setInterval(() => {
  for (let ds of graphique.data.datasets) {
    for (let i = 0; i < ds.data.length; i++) {
      ds.data[i].y = Math.round(Math.random() * 2000);
    }
  }
  graphique.update();
}, 500);
