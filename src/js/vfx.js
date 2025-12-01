import { VFX } from "vfx-js";

const vfx = new VFX();

const el = document.querySelector(".robocop img");
vfx.add(el, {
  shader: "rgbShift",
  overflow: 30
});
