const cursor = document.querySelector(".cursor");
const videoCursor = document.querySelector(".video-cursor");
const counter = document.getElementById("counter");
var timeout;

//follow cursor on mousemove

function loading() {
    var count = setInterval(function () {
        var c = document.getElementById("counter");
        var int = parseInt(c.textContent)
        c.textContent = (++int).toString();
        if(int == 100){
            clearInterval(count);
            c.classList.add("hide")
            document.getElementById("preloader").classList.add("slide-down")
        }
    }, 8)
}

function normalCursor() {
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";
        //cursor effects when mouse stopped
        function mouseStopped() {
            cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 5000);
    });

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });
}


function videoCursorMovement() {
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        videoCursor.style.top = y + "px";
        videoCursor.style.left = x + "px";
        videoCursor.style.display = "block";
        //cursor effects when mouse stopped
        function mouseStopped() {
            cursor.style.display = "none";
        }
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 5000);
    });

    document.addEventListener("mouseout", () => {
        videoCursor.style.display = "none";
    });
}


function init() {
    normalCursor()
    videoCursorMovement()
    loading()
}

init()
