import * as Tone from "https://esm.sh/tone@15.1.22";

document.querySelector(".btn-primary").addEventListener("click", async () => {
  await Tone.start();

  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C5", "8n");
});