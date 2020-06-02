document.onkeydown = checkKey;

function checkKey(a) {

    a = a || window.event;

    if (a.keyCode == '37') {
        plusDivs(-1);
        // left arrow
    } else if (a.keyCode == '39') {
        plusDivs(1);
        // right arrow

    }
    if (a.keyCode == '38') {
        audio.volume += 0.1;
        // up arrow
    } else if (a.keyCode == '40') {
        audio.volume -= 0.1;
        // down arrow
    } else if (a.keyCode == '80') {
        if (isPlaying == 0) {
            audio.play();
            isPlaying = 1;
        } else if (isPlaying == 1) {
            audio.pause();
            isPlaying = 0;
        }
    }
}