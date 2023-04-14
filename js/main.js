var btn = document.getElementById("btn")
var checkbox = document.getElementById("switch")
var body = document.getElementById("index-body")
var container = document.querySelector(".main-container")
var crt = document.querySelector(".crt")

function reload() {
    checkbox.checked = false
}

btn.addEventListener ('click', () => {
    var click = new Audio('../audio/click.mp3');
    var noise1 = new Audio('../audio/noise-1.mp3');
    var noise2 = new Audio('../audio/noise-2-loop.mp3');
    var off = new Audio('../audio/off.mp3');
    var fxintro = new Audio('../audio/fx-intro.mp3');


    if (btn.classList.contains("active") ) {
        btn.classList.remove("active")
        off.play();
    }
    else {
        btn.classList.add("active")
        click.play();
        noise1.play();
        
        setTimeout(function () {
            if (checkbox.checked) {
                noise2.play();
                noise2.loop = true;
            }
        }, 1400);
        
        btn.addEventListener ('click', () => {
            click.pause();
            click.currentTime = 0;
            noise1.pause();
            noise1.currentTime = 0;
            noise2.pause();
            noise2.currentTime = 0;
        })

        function scaler() {
            if (btn.classList.contains("active")) {
                
                container.classList.add("container-zoomer")
                body.classList.add("overflow-fix")
                crt.classList.add("crt-fullscreen")
                fxintro.play()
                
                setTimeout(function () {
                    window.location.href = "frontpage.html"
                }, 3500);
            }
        }

        body.addEventListener('keydown', () => {
            scaler();
        })

        container.addEventListener('click', () => {
            scaler();
        })
    }
})

var btnLight = document.querySelector(".btn-light")

btn.addEventListener('click', () => {
    btn.classList.toggle("switch-label-active")
    btnLight.classList.toggle("btn-light-active")
})