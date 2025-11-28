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







new Chart(document.querySelector("#a").getContext("2d"), {
  type: "bar",
  data: {
    labels: [
      "Rire",
      "Musique",
      "Inspirant",
      "Honnête",
      "Unique",
      "Célébrités",
      "Valeurs",
      "Émouvant"
    ],
    datasets: [
      {
        label: "% de répondants",
        data: [49, 49, 42, 42, 37, 31, 31, 23],
        backgroundColor: ["rgba(239, 85, 85, 0.5)"],
        borderWidth: 1,
        borderRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text:
          "Éléments publicitaires qui captent l’attention de la génération Z américaine (T4 2024)",
        color: "#fff",
        font: {
          family: "Arial",
          size: 16,
          weight: "700"
        },
        padding: { top: 15, bottom: 10 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        // min: 10,
        // max: 100,
        title: {
          display: true,
          text: "% de répondants"
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10]
        },
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500"
          },
          maxTicksLimit: 6,
          mirror: false,
          z: 1,
          callback: (v) => v + "%"
        }
      },

      x: {
        title: {
          text: "Éléments publicitaires",
          display: true
        },
        ticks: {
          display: true,
          color: "#fff",
          font: {
            family: "Arial",
            size: 11,
            weight: "500"
          },
          mirror: false
        },
        grid: {
          color: "rgba(222, 222, 222, 0.1)",
          lineWidth: 1
        },
        border: {
          color: "rgba(222, 222, 222, 0.1)",
          width: 2,
          dash: [10, 10]
        }
      }
    }
  }
});
