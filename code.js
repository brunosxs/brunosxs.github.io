let subtitle;
let originalText;
let played = false;
let speed = 100;
let i = 0
setInterval(() => {
  if (document.getElementById("home-subtitle") && !played) {
    subtitle = document.getElementById("home-subtitle");
    originalText = subtitle.textContent.slice();
    subtitle.innerText = "   ";
    console.log(originalText);
    console.log(subtitle)
    played = true
  }
  if (i < originalText.length) {
    subtitle.innerText = originalText.substring(0, i);
    i++
  }
}, speed);
