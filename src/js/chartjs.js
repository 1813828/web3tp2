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
        borderWidth: 10,
        tension: 0.3, // 0 linéaire, 0.5 smooth
        fill: true,
        borderColor: "rgba(10, 161, 60)",
        backgroundColor: "rgba(175, 85, 0, 0)",
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
      "brain",
      "Armored torso",
      "Cybernetic arms",
      "hydraulic legs",
      "computer ",
      "artificial heart",
      "exoskeleton",
      "computer system",
      
    ],
    
   
    datasets: [
      {
        label: "System status",
        data: [100, 80, 60, 50, 60, 31, 31, 23],
        backgroundColor: ["rgba(10, 161, 60)"],
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
          "System status",
        color: "#fff",
        font: {
          family: "Maveric",
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
          text: "Unit health %",
          font: {
            family: "alerte",
            color: "#ffffffff",
          }
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
          color: "#ffffffff",
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
          text: "upgrade elements",
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
