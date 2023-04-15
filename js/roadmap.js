const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

var podcast = document.getElementById("audio")
var play = document.getElementById("play")
var pause = document.getElementById("pause")
var elapsed = document.getElementById("progress");

play.addEventListener("click", () => {
    podcast.play()
    play.style.display = "none"
    pause.style.display = "block"
    setTimeout(function () {
        elapsed.classList.add("blue-glow")
    }, 500);
    
})

pause.addEventListener("click", () => {
    podcast.pause()
    play.style.display = "block"
    pause.style.display = "none"
})

setInterval(function(){
    var percentage = audio.currentTime / audio.duration;
    var width = (percentage * 100);
    elapsed.style.width = width + "%"
    
    if (width == 100){
        podcast.pause()
        play.style.display = "block"
        pause.style.display = "none"
        elapsed.classList.remove("blue-glow")
    }
}, 33);
