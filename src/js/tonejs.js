import * as Tone from "tone.js";

const player = new Tone.Player("./assets/audio/robocop2.mp3").toDestination();

document.querySelector("button").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
      player.start();
  });
});