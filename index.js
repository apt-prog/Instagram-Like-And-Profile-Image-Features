let LikeCount = document.querySelector("#LikeCount");
let LikeIcon = document.querySelector("#Likes");
let imgClick = document.querySelector("#Icard_body");
let DP = document.querySelector("#DPImage");
let DPshow = document.querySelector("#DpShow");
let Heart = document.querySelector("#Heart");
let DPInnerImage = document.querySelector(".FullScreen");
let likeCount = 0;

imgClick.addEventListener("dblclick", function () {
  ++likeCount;
  LikeCount.innerHTML = likeCount;

  if (likeCount === 0) {
    console.log("Not Have");
  } else {
    Heart.className = "bi bi-heart-fill OnLink";
  }

  LikeIcon.style.scale = "1";
  setTimeout(() => {
    LikeIcon.style.scale = "1.45";
    LikeIcon.style.transition = "0.55s ease-in-out";
  }, 500);
  setTimeout(() => {
    LikeIcon.style.scale = "0";
  }, 1000);
});

Heart.addEventListener("click", function () {
  ++likeCount;
  LikeCount.innerHTML = likeCount;

  if (likeCount === 0) {
    console.log("Not Have");
  } else {
    Heart.className = "bi bi-heart-fill OnLink";
  }

  LikeIcon.style.scale = "1";
  setTimeout(() => {
    LikeIcon.style.scale = "1.45";
    LikeIcon.style.transition = "0.55s ease-in-out";
  }, 500);
  setTimeout(() => {
    LikeIcon.style.scale = "0";
  }, 1000);
});

DP.addEventListener("click", function () {
  DPshow.style.display = "inline";
});

DPInnerImage.addEventListener("click", function () {
  DPshow.style.display = "none";
});

