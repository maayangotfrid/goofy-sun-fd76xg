import "./styles.css";

/* eslint-disable */

import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";
const scContainer1 = document.getElementById("js-canvas-1");

const sc1 = new ScratchCard("#js-canvas-1", {
  scratchType: SCRATCH_TYPE.SPRAY,
  containerWidth: scContainer1.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: "https://source.unsplash.com/cPZ21gvclO8/300x300",
  imageBackgroundSrc:
    "https://media2.giphy.com/media/88i684BwgEqsDAVGn0/giphy.gif",
  clearZoneRadius: 80,
  nPoints: 30,
  pointSize: 4,
  callback: function () {
    console.log("done");
  }
});

console.log("fired");

// Init
sc1
  .init()
  .then(() => {
    sc1.canvas.addEventListener("scratch.move", () => {
      let percent = sc1.getPercent().toFixed(2);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });
