// ----------------------------------------- Code für grünen Virus -----------------------------------------
let i = 0;
let TimeId1 = setInterval(() => {
    if (shotsleft < 1) {
        document.getElementById("flyingBird").style.display = "none";
    } else {
        let XAchse = Math.floor(Math.random() * 70);
        document.getElementById("flyingBird").style.display = "block";
        document.getElementById("flyingBird").style.position = "absolute";
        document.getElementById("flyingBird").style.top = XAchse + "vh";
        i++;

        let horizontal = Math.floor(Math.random() * 90);
        let TimeID2 = setInterval(() => {
            document.getElementById("flyingBird").style.left = horizontal + "vw";
            horizontal++;
            if (horizontal == 90) {
                document.getElementById("flyingBird").style.display = "none";
                clearInterval(TimeID2)
            }
        }, 250)

        if (i == 1000) {
            document.getElementById("flyingBird").style.display = "none";
            clearInterval(TimeId1)
        }
    }
}, 1000)

document.getElementById("flyingBird").addEventListener("click", () => {
    if (shotsleft > 0) {
        PunktestandNeu = PunktestandNeu + 50;
        shotsleft = shotsleft - 1;
        document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
        document.getElementById("flyingBird").style.display = "none"
        ToilettenpapierEinblenden(shotsleft)
    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)
    }
})

// ----------------------------------------- Code für grünen Virus -----------------------------------------
// ----------------------------------------- Code für grauen Virus -----------------------------------------

let i2 = 0;
document.getElementById("flyingBird2").style.display = "block"

let TimeId3 = setInterval(() => {
    if (shotsleft < 1) {
        document.getElementById("flyingBird2").style.display = "none";
    } else {
        let XAchse2 = Math.ceil(Math.random() * 70);
        document.getElementById("flyingBird2").style.display = "block";
        document.getElementById("flyingBird2").style.position = "absolute";
        document.getElementById("flyingBird2").style.top = XAchse2 + "vh";
        i2++;

        let horizontal2 = Math.floor(Math.random() * 90);
        let TimeID4 = setInterval(() => {
            document.getElementById("flyingBird2").style.left = horizontal2 + "vw";
            horizontal2++;
            if (horizontal2 == 90) {
                document.getElementById("flyingBird2").style.display = "none";
                clearInterval(TimeID4)
            }
        }, 250)

        if (i2 == 1000) {
            document.getElementById("flyingBird2").style.display = "none";
            clearInterval(TimeId3)
        }
    }
}, 1000)

document.getElementById("flyingBird2").addEventListener("click", () => {
    if (shotsleft > 0) {
        PunktestandNeu = PunktestandNeu + 100;
        shotsleft = shotsleft - 1;
        document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
        document.getElementById("flyingBird2").style.display = "none"
        ToilettenpapierEinblenden(shotsleft)
    } else {
        document.getElementById("flyingBird2").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)
    }
})


// ----------------------------------------- Code für grauen Virus -----------------------------------------

// ----------------------------------------- Code für roten Virus -----------------------------------------
let i3 = 0;
document.getElementById("flyingBird3").style.display = "block"

let TimeId5 = setInterval(() => {
    if (shotsleft < 1) {
        document.getElementById("flyingBird3").style.display = "none";
    } else {
        let XAchse3 = Math.round(Math.random() * 70);
        document.getElementById("flyingBird3").style.display = "block";
        document.getElementById("flyingBird3").style.position = "absolute";
        document.getElementById("flyingBird3").style.top = XAchse3 + "vh";
        i3++;

        let horizontal3 = Math.floor(Math.random() * 90);
        let TimeID6 = setInterval(() => {
            document.getElementById("flyingBird3").style.left = horizontal3 + "vw";
            horizontal3++;
            if (horizontal3 == 90) {
                document.getElementById("flyingBird3").style.display = "none";
                clearInterval(TimeID6)
            }
        }, 250)

        if (i3 == 1000) {
            document.getElementById("flyingBird3").style.display = "none";
            clearInterval(TimeId5)
        }
    }
}, 1000)

document.getElementById("flyingBird3").addEventListener("click", () => {
    if (shotsleft > 0) {
        PunktestandNeu = PunktestandNeu + 500;
        shotsleft = shotsleft - 1;
        document.getElementById("Ausgabe").innerHTML = PunktestandNeu;
        document.getElementById("flyingBird3").style.display = "none"
        ToilettenpapierEinblenden(shotsleft)
    } else {
        document.getElementById("flyingBird3").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)
    }
})

// ----------------------------------------- Code für roten Virus -----------------------------------------

// ----------------------------------------- global -----------------------------------------
let PunktestandNeu = 0;
let shotsleft = 10;


function ToilettenpapierEinblenden(shotsleft) {
    if (shotsleft <= 9) {
        document.getElementById("toilettenpapier10").style.display = "none";
    } if (shotsleft <= 8) {
        document.getElementById("toilettenpapier9").style.display = "none";
    } if (shotsleft <= 7) {
        document.getElementById("toilettenpapier8").style.display = "none";
    } if (shotsleft <= 6) {
        document.getElementById("toilettenpapier7").style.display = "none";
    } if (shotsleft <= 5) {
        document.getElementById("toilettenpapier6").style.display = "none";
    } if (shotsleft <= 4) {
        document.getElementById("toilettenpapier5").style.display = "none";
    } if (shotsleft <= 3) {
        document.getElementById("toilettenpapier4").style.display = "none";
    } if (shotsleft <= 2) {
        document.getElementById("toilettenpapier3").style.display = "none";
    } if (shotsleft <= 1) {
        document.getElementById("toilettenpapier2").style.display = "none";
    } if (shotsleft <= 0) {
        document.getElementById("toilettenpapier1").style.display = "none";
    }
    return shotsleft;
}


document.getElementById("daneben").addEventListener("click", () => {
    if (shotsleft > 0) {
        shotsleft = shotsleft - 1;
        ToilettenpapierEinblenden(shotsleft)

        // document.getElementById("Restschusse").innerHTML = shotsleft;
    } else {
        document.getElementById("flyingBird").style.display = "none"
        shotsleft = 0;
        ToilettenpapierEinblenden(shotsleft)

        // document.getElementById("Restschusse").innerHTML = shotsleft;
    }
})
// ----------------------------------------- global -----------------------------------------

