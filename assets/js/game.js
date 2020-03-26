let PunktestandNeu = 0;
let shotsleft = 10;
let i = 0;


let TimeId1 = setInterval(() => {
    if (shotsleft < 1) {
        document.getElementById("flyingBird").style.display = "none";

    } else {


        let XAchse = Math.floor(Math.random() * 73);
        console.log(XAchse)

        document.getElementById("flyingBird").style.display = "block";
        document.getElementById("flyingBird").style.position = "absolute";
        document.getElementById("flyingBird").style.top = XAchse + "vh";
        i++;

        let horizontal = 0;
        let TimeID2 = setInterval(() => {
            document.getElementById("flyingBird").style.left = horizontal + "%";
            horizontal++;
            if (horizontal == 97) {
                document.getElementById("flyingBird").style.display = "none";
                clearInterval(TimeID2)
            }
        }, 100)

        if (i == 1000) {
            document.getElementById("flyingBird").style.display = "none";
            clearInterval(TimeId1)
        }
    }
}, 1000)




document.getElementById("flyingBird").addEventListener("click", () => {
    if (shotsleft > 0) {
        PunktestandNeu = PunktestandNeu + 100;
        shotsleft = shotsleft - 1;
        document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
        document.getElementById("flyingBird").style.display = "none"
        document.getElementById("Restschusse").innerHTML = shotsleft;

    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        document.getElementById("Restschusse").innerHTML = shotsleft;
    }
})

document.getElementById("daneben").addEventListener("click", () => {
    if (shotsleft > 0) {
        shotsleft = shotsleft - 1;
        document.getElementById("Restschusse").innerHTML = shotsleft;
    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        document.getElementById("Restschusse").innerHTML = shotsleft;
    }
})