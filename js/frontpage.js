var introVideo = document.getElementById("intro")
var prompt = document.getElementById("prompt")

function introPlayer() {
    prompt.style.display = "none"
    introVideo.play();
    introVideo.style.display = "block"

    setTimeout(function () {
        window.location.href = "dashboard.html"
    }, 24500);

}