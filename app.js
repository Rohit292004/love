const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesClickCounter = 0;

yesBtn.addEventListener("click", () => {
  yesClickCounter++;

  if (yesClickCounter === 1) {
    question.innerHTML = "Then cold coffee done🍻!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  } else if (yesClickCounter === 2) {
    question.innerHTML = "OK, then meet tomorrow!";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmRtMXQyY25oZjdwNGtnNzNncm4zcjRwdDBmbmN0a2Q4cmdneWtwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ORjfgiG9ZtxcQQwZzv/giphy.gif"; // Optional: Change to a new gif if you want
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Make sure the button is positioned absolutely
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
