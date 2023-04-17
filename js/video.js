var video = document.getElementById("video")
var videoOverlay = document.getElementById("video-overlay")

video.addEventListener("mouseover", () => {
    videoOverlay.classList.add("video-overlay-active")
})

video.addEventListener("mouseout", () => {
    setTimeout(function () {
        videoOverlay.classList.remove("video-overlay-active")
    }, 2500)
})

var videoPlay = document.getElementById("video-play")
var videoPause = document.getElementById("video-pause")

videoPlay.addEventListener("click", () => {
    video.play()
    videoPlay.style.display = "none"
    videoPause.style.display = "block"
})

videoPause.addEventListener("click", () => {
    video.pause()
    videoPlay.style.display = "block"
    videoPause.style.display = "none"
})

setInterval(function(){
    var percentage = video.currentTime / video.duration;
    var end = (percentage * 100);
    console.log(video.currentTime)

    if (end == 100){
        video.pause()
        videoPlay.style.display = "block"
        videoPause.style.display = "none"
    }
}, 33);
