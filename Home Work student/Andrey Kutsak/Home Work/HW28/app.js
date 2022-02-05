document.addEventListener("DOMContentLoaded", function () {
  document.body.style.margin = "0px";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let workers = [
    { name: "Andrey", surname: "Kutsak", salary: 83000 },
    { name: "Ivan", surname: "Andreyev", salary: 73000 },
    { name: "Marina", surname: "Mahalyas", salary: 63000 },
    { name: "Yana", surname: "Smychok", salary: 53000 },
    { name: "Viktor", surname: "Ivanenko", salary: 53000 },
    { name: "Alla", surname: "kolosov", salary: 53000 },
    { name: "Ruslan", surname: "Ivanov", salary: 400 },
    { name: "Vitaliy", surname: "Onyshcuk", salary: 5000 },
    { name: "Roman", surname: "Re", salary: 63000 },
    { name: "Lora", surname: "Virginia", salary: 63000 },
  ];
  let lineHeight = 30;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(20, 30, 100, 100);

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(250, 150, 50, 0, 2 * Math.PI);
  ctx.fill();

  ctx.font = "25px sans-serif";
  ctx.fillStyle = "#fff";
  ctx.fillText("list people who has salary more then 5000 dolars", 40, 270);
  for (const i of workers) {
    if (i.salary > 5000) {
      ctx.fillStyle = "green";
      ctx.font = "20px sans-serif";
      ctx.fillText(
        i.name + " " + i.surname + " have salary " + i.salary,
        40,
        lineHeight + 300
      );
      lineHeight += 30;
    }
  }
});
