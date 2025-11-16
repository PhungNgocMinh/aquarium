//  Took me 40 MINUTES (i suck)
let index = 1;

function changeBackground() {
    if (index == 1) {
        document.getElementById("background").style.backgroundImage = "url('Image/background_bikinibottom2.jpg')";
        index = 2;
    }
    else if (index == 2) {
        document.getElementById("background").style.backgroundImage = "url('Image/background_genshin.png')";
        index = 3;
    }
    else if (index == 3) {
        document.getElementById("background").style.backgroundImage = "url('Image/background_bikinibottom1.jpg')";
        index = 1;
    }
}
