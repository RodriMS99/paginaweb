window.onload = function () {
  var canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#f00";
      ctx.beginPath();
      ctx.moveTo(20, 130);
      ctx.lineTo(230, 20);
      ctx.stroke();
    }
    var ctx2 = canvas.getContext("2d");
    if (ctx2) {
      ctx2.lineWidth = 3;
      ctx2.strokeStyle = "#f00";
      ctx2.beginPath();
      ctx2.moveTo(150, 20);
      ctx2.lineTo(300, 150);
      ctx2.stroke();
    }
  }
  
  var canvas2 = document.getElementById("linea3");
  if (canvas2 && canvas2.getContext) {
    var ctx = canvas2.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#f00";
      //dibuja la primera línea
      ctx.beginPath();
      ctx.moveTo(20, 25);
      ctx.lineTo(230, 25);
      ctx.stroke();
      // dibuja una segunda línea  MÁS FINA;
      ctx.translate(0, 0.5);
      ctx.beginPath();
      ctx.moveTo(20, 50);
      ctx.lineTo(230, 50);
      ctx.stroke();
    }
  }
};
