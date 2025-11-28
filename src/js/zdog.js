import Zdog from "https://esm.sh/zdog";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true,
  dragRotate: true // 👈
});

new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  stroke: 40,
  color: "#4E9"
});

// 👇
function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
