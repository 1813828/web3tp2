import { svg, animate, utils } from "https://esm.sh/animejs";

const chiffreElements = document.querySelectorAll(".chiffre");

chiffreElements.forEach((element) => {
  animate(element, {
    textContent: () => utils.random(0, 9999, 0),
    modifier: utils.round(0),
    ease: "in(1)",
    delay: () => utils.random(100, 2000, 0),
    loop: true,
    loopDelay: 500,
    onLoop: (self) => {
      self.refresh();
    }
  });
});
//------------------------------animation  pour  les chiffres d'alertes --------------------------------------//


const ringElements = svg.createDrawable(".ring");

// Affichage du pourcentage dans le span
const updateDrawLabel = () => {
  ringElements.forEach((ringElement) => {
    const drawValue = ringElement.getAttribute("draw");
    const values = drawValue.trim().split(/\s+/); // Ex: "0 0.75"
    const percent = Math.round(values[1] * 100);
    ringElement
      .closest(".circle-container")
      .querySelector("span").textContent = `${percent}`;
  });
};

animate(ringElements, {
  draw: { from: "0 0", to: () => `0 ${utils.random(0, 1, 2)}` },
  loop: true,
  onUpdate: updateDrawLabel,
  onLoop: (self) => {
    self.refresh();
    updateDrawLabel();
  }
});
updateDrawLabel();
