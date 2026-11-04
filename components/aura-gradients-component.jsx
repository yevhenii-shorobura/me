const COLOR_LUT = new Array(256);
for (let i = 0; i < 256; i++) {
  const t = i / 255;
  let r, g, b;
  if (t < 0.18) {
    // Глибока бордова аура на краях
    const lt = t / 0.18;
    r = Math.floor(20 + lt * 135);
    g = Math.floor(2 + lt * 12);
    b = Math.floor(6 + lt * 24);
  } else if (t < 0.45) {
    // Насичений багряний -> Яскравий вогняно-оранжевий
    const lt = (t - 0.18) / 0.27;
    r = Math.floor(155 + lt * 100);
    g = Math.floor(14 + lt * 86);
    b = Math.floor(30 - lt * 15);
  } else if (t < 0.72) {
    // Розжарений оранжевий -> Яскраве золото
    const lt = (t - 0.45) / 0.27;
    r = 255;
    g = Math.floor(100 + lt * 125);
    b = Math.floor(15 + lt * 80);
  } else {
    // Сліпуче біло-золоте ядро (Photon Ring & Doppler peak)
    const lt = (t - 0.72) / 0.28;
    r = 255;
    g = Math.floor(225 + lt * 30);
    b = Math.floor(95 + lt * 160);
  }
  COLOR_LUT[i] = `rgb(${r},${g},${b})`;
}

// Only one time calling for all instances of the component, for performance reasons
export default COLOR_LUT