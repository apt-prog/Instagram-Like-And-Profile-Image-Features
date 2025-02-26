let count = 0;

document.getElementById("Main").addEventListener("dblclick", function () {
  count++;
  console.log(count);
  document.querySelector(".h1").innerText = count
  let body = document.querySelector(".body");
  body.style.transform = "scale(1)";

  setTimeout(() => {
    body.style.transform = "scale(1.5)";
    setTimeout(() => {
      body.style.transition = ".5s ease-in-out";
      body.style.transform = "scale(0)";
    }, 400);
  }, 1000);
});
