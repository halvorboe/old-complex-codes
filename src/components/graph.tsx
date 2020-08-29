import React, { useRef, useEffect, useState } from "react";

const arrow = (context, fromx, fromy, tox, toy) => {
  context.beginPath();
  context.fillStyle = "#00B0FF";
  var headlen = 5; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 6),
    toy - headlen * Math.sin(angle - Math.PI / 6)
  );
  context.moveTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 6),
    toy - headlen * Math.sin(angle + Math.PI / 6)
  );
  context.stroke();
};

const circle = (context, x, y, radius, text) => {
  context.beginPath();
  context.fillStyle = "#000000";
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillText("1", x, y);

  context.stroke();
};

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    // Fix size
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    // Grab context
    const context = canvas.getContext("2d");
    arrow(context, 10, 30, 200, 150);
    arrow(context, 100, 200, 400, 50);
    arrow(context, 200, 30, 10, 150);
    arrow(context, 400, 200, 100, 50);
    circle(context, 100, 100, 100);
  }, []);
  const [graph, setGraph] = useState({});
  return <canvas ref={ref} />;
};
