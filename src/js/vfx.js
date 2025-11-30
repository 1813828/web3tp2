import { VFX } from "vfx-js";

document.addEventListener("DOMContentLoaded", () => {
  const vfx = new VFX();
  const page = document.body;

  vfx.add(page, {
    shader: "glitch",
    overflow: 30
  });
});
